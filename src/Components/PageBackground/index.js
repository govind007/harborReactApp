import React from 'react'
import { View, ImageBackground } from 'react-native'
import { useTheme } from '@/Theme'
import styles from './styles'

const PageBackground = (props) => {
  const { Images } = useTheme()

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.homepageBG} style={styles.image}>
        {props.children}
      </ImageBackground>
    </View>
  )
}

export default PageBackground
