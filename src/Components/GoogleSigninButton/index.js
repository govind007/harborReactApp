import React, { useEffect } from 'react'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import { postRequest } from '@/Services/request'
import { TouchableOpacity, Text } from 'react-native'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/FontAwesome'

const GoogleSigninButton = (props) => {
  const { Common, Gutters } = useTheme()

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1027918676347-461at5avgtbhfmg2jujh3pggl9vndik0.apps.googleusercontent.com',
      offlineAccess: true,
    })
  }, [])

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      postRequest({
        url: 'https://oauth2.googleapis.com/token',
        data: {
          client_id:
            '1027918676347-461at5avgtbhfmg2jujh3pggl9vndik0.apps.googleusercontent.com',
          grant_type: 'authorization_code',
          code: userInfo.serverAuthCode,
          scopes: userInfo.scopes,
          access_type: 'offline',
          client_secret: 'wXn8Bq-GLGaSWDP62hogrqGZ',
          redirect_uri:
            'https://harborapp-d5243.firebaseapp.com/__/auth/handler',
        },
        external: true,
      })
        .then(function (response) {
          postRequest({
            url: '/user/thirdparty/login',
            data: {
              platform: 'google',
              email: userInfo.user.email,
              name: userInfo.user.name,
              country: 'IN',
              access_token: response.data.access_token,
              refresh_token: response.data.refresh_token,
            },
          }).then(function (resp) {
            console.log(resp)
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  return (
    <Icon.Button
      name="google"
      onPress={signIn}
      backgroundColor="#b23221"
      size={22}
      style={[Common.socialLoginButton]}
    >
      <Text style={Common.socialLoginButtonText}>Continue With Google</Text>
    </Icon.Button>
  )
}

export default GoogleSigninButton
