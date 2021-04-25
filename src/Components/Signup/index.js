import React from 'react'
import { View, Button } from 'react-native'
import { useForm } from 'react-hook-form'
import FormInput from '@/Components/FormInput'
import FormSelect from '@/Components/FormSelect'
import FormCountrySelect from '@/Components/FormCountrySelect'
import { postRequest } from '@/Services/request'

const Signup = ({ navigation }) => {
  const { errors, handleSubmit, control } = useForm()

  function onSubmit(data) {
    postRequest({ url: '/user/register', data })
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
        name="name"
        error={errors.firstName}
        label="Name"
        control={control}
        validationRules={{
          required: { value: true, message: 'Please enter name' },
        }}
      />
      <FormSelect
        name="gender"
        error={errors.gender}
        label="Gender"
        control={control}
        validationRules={{
          required: { value: true, message: 'Please enter gender' },
        }}
        placeholder={{
          label: 'Select Gender',
          value: null,
        }}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
      />
      <FormCountrySelect
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        withCallingCode
        withEmoji
        defaultValue="IN"
        name="country"
        error={errors.country}
        label="Country"
        control={control}
        validationRules={{
          required: { value: true, message: 'Please enter country' },
        }}
      />
      <FormInput
        name="email"
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

export default Signup
