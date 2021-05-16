import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import FormInput from '@/Components/FormInput'
import NativeLoginCardHeader from '@/Components/NativeLoginCardHeader'
import { postRequest } from '@/Services/request'
import { useTheme } from '@/Theme'

const Login = ({ navigation }) => {
  const { errors, handleSubmit, control } = useForm()
  const { Gutters, Common, Fonts } = useTheme()

  function onSubmit(data) {
    postRequest({ url: '/user/login', data })
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <View
      style={[
        Gutters.regularHPadding,
        Gutters.regularVPadding,
        Gutters.smallHMargin,
        Gutters.smallVMargin,
        Common.cardBackground,
        Common.cardShadow,
      ]}
    >
      <NativeLoginCardHeader text="Login with Harbor" navigation={navigation} />
      <FormInput
        name="emailId"
        error={errors.emailId}
        label="Email Id"
        control={control}
        validationRules={{
          required: { value: true, message: 'Please enter EmailId' },
        }}
      />
      <FormInput
        name="password"
        error={errors.password}
        label="Password"
        secureTextEntry={true}
        control={control}
        validationRules={{
          required: { value: true, message: 'Please enter Password' },
        }}
      />
      <TouchableOpacity
        style={Common.button.base}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={Fonts.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
