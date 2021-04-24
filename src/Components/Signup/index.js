import React from 'react'
import { View, Button } from 'react-native'
import { useForm } from 'react-hook-form'
import FormInput from '@/Components/FormInput'
import FormSelect from '@/Components/FormSelect'
import FormCountrySelect from '@/Components/FormCountrySelect'

const Signup = ({ navigation }) => {
  const { errors, handleSubmit, control } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go back home"
      />
      <FormInput
        name="firstName"
        error={errors.firstName}
        label="First Name"
        control={control}
        validationRules={{
          required: { value: true, message: 'Please enter first name' },
        }}
      />
      <FormInput
        name="lastName"
        error={errors.lastName}
        label="Last Name"
        control={control}
        validationRules={{
          required: { value: true, message: 'Please enter last Name' },
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

export default Signup
