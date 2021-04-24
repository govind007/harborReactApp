import React from 'react'
import { View, ImageBackground } from 'react-native'
import { useTheme } from '@/Theme'

const Brand = (props) => {
  const { Layout, Images } = useTheme()

  return (
    <View>
      <ImageBackground source={Images.homepageBG} style={Layout.fullSize}>
        {props.children}
      </ImageBackground>
    </View>
  )
}

export default Brand
