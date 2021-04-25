import React, { useRef } from 'react'
import { View, Button } from 'react-native'
import { useForm } from 'react-hook-form'
import FormInput from '@/Components/FormInput'
import { postRequest } from '@/Services/request'

const Login = ({ navigation }) => {
  const { errors, handleSubmit, control } = useForm()

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
    <View>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go back home"
      />
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
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

export default Login
