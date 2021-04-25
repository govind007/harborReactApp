import React from 'react'
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk'
import { postRequest, request } from '@/Services/request'

const FacebookSigninButton = (props) => {
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

  return (
    <LoginButton
      onLoginFinished={(error, result) => {
        if (error) {
          console.log('login has error: ' + result.error)
        } else if (result.isCancelled) {
          console.log('login is cancelled.')
        } else {
          AccessToken.getCurrentAccessToken().then(async (data) => {
            const accessToken = data.accessToken.toString()
            const resp = await getRefreshToken(accessToken)
            const userdata = await getInfoFromToken(accessToken)
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
      }}
    />
  )
}

export default FacebookSigninButton
