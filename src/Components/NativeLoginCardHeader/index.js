import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

const NativeLoginCardHeader = ({ navigation, text }) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ width: 100 }}>
        <Icon.Button
          onPress={() => navigation.navigate('Home')}
          name="md-chevron-back-sharp"
          backgroundColor="#ffffff"
          color="black"
          iconStyle={{ marginRight: 0 }}
        >
          Back
        </Icon.Button>
      </View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  )
}

export default NativeLoginCardHeader
