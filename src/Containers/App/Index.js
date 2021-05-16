import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import { PageBackground } from '@/Components'
import GoogleSigninButton from '@/Components/GoogleSigninButton'
import AppLogo from '@/Components/AppLogo'
import FacebookSigninButton from '@/Components/FacebookSigninButton'
import { useTheme } from '@/Theme'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles'

const IndexAppContainer = ({ navigation }) => {
  const { Images, Common, Gutters } = useTheme()

  return (
    <PageBackground>
      <View style={styles.wrapper}>
        <AppLogo />
        <Text style={styles.logoText}>
          A place to share knowledge and better understand the world
        </Text>
        <GoogleSigninButton />
        <FacebookSigninButton />
        <Icon.Button
          name="envelope"
          backgroundColor="#0078be"
          size={22}
          style={[Common.socialLoginButton]}
          onPress={() => navigation.navigate('LoginSignup')}
        >
          <Text style={Common.socialLoginButtonText}>Continue With Email</Text>
        </Icon.Button>
        <Text style={styles.text}>
          By continuing you indicate that you have read and agree to Terms and
          Conditions
        </Text>
      </View>
    </PageBackground>
  )
}

export default IndexAppContainer
