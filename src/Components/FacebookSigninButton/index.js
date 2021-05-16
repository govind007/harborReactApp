import React from 'react'
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk'
import { postRequest, request } from '@/Services/request'
import { Text, View } from 'react-native'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/FontAwesome'

const FacebookSigninButton = (props) => {
  const { Common, Gutters, Fonts } = useTheme()

  function getInfoFromToken(token) {
    return new Promise((resolve, reject) => {
      const PROFILE_REQUEST_PARAMS = {
        fields: {
          string: 'id, name, email',
        },
      }
      const profileRequest = new GraphRequest(
        '/me',
        { token, parameters: PROFILE_REQUEST_PARAMS },
        (error, result) => {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        },
      )
      new GraphRequestManager().addRequest(profileRequest).start()
    })
  }

  async function getRefreshToken(token) {
    return await request({
      url: `https://graph.facebook.com/v2.5/oauth/access_token?grant_type=fb_exchange_token&client_id=547808346092653&client_secret=1f0837c77393be5838927f910844fdd7&fb_exchange_token=${token}`,
      external: true,
    })
  }

  function handleFacebookLogin() {
    LoginManager.logInWithPermissions(['email'])
      .then((result) => {
        if (result.error) {
          console.log('login has error: ' + result.error)
        } else if (result.isCancelled) {
          console.log('login is cancelled.')
        } else {
          AccessToken.getCurrentAccessToken().then(async (data) => {
            const accessToken = data.accessToken.toString()
            const resp = await getRefreshToken(accessToken)
            const userdata = await getInfoFromToken(accessToken)

            console.log('userdatauserdatauserdata', {
              platform: 'facebook',
              email: userdata.email,
              name: userdata.name,
              country: 'IN',
              access_token: accessToken,
              refresh_token: resp.data.access_token,
            })
            postRequest({
              url: '/user/thirdparty/login',
              data: {
                platform: 'facebook',
                email: userdata.email,
                name: userdata.name,
                country: 'IN',
                access_token: accessToken,
                refresh_token: resp.data.access_token,
              },
            }).then((resp) => {
              console.log(resp)
            })
          })
        }
      })
      .catch((error) => {
        console.log('login has error: ' + error)
      })
  }

  return (
    <View style={Gutters.regularVMargin}>
      <Icon.Button
        name="facebook"
        onPress={handleFacebookLogin}
        backgroundColor="#3b5998"
        size={22}
        style={[Common.socialLoginButton]}
      >
        <Text style={Common.socialLoginButtonText}>Continue With Facebook</Text>
      </Icon.Button>
    </View>
  )
}

export default FacebookSigninButton
