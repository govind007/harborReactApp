import React from 'react'
import { View, Button } from 'react-native'
import { PageBackground } from '@/Components'
import GoogleSigninButton from '@/Components/GoogleSigninButton'
import FacebookSigninButton from '@/Components/FacebookSigninButton'
import { useTheme } from '@/Theme'

const IndexAppContainer = ({ navigation }) => {
  const { Layout, Common, Colors } = useTheme()

  return (
    <PageBackground>
      <GoogleSigninButton />
      <FacebookSigninButton />
      <Button
        style={[Common.button, Common.backgroundNativeEmail]}
        onPress={() => navigation.navigate('LoginSignup')}
        title="Continue With Email"
      />
    </PageBackground>
  )
}

export default IndexAppContainer
