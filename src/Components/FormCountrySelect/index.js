import React, { useRef } from 'react'
import { View, Text, findNodeHandle } from 'react-native'
import styles, { pickerSelectStyles } from './styles'
import { useController } from 'react-hook-form'
import CountryPicker from 'react-native-country-picker-modal'

const FormCountrySelect = (props) => {
  const {
    label,
    error,
    control,
    name,
    validationRules,
    defaultValue,
    ...selectProps
  } = props
  const { field } = useController({
    control,
    defaultValue: defaultValue || '',
    name,
    rules: validationRules,
  })
  const scroll = useRef(null)

  function _scrollToInput(reactNode) {
    // Add a 'scroll' ref to your ScrollView
    if (scroll.current.props) {
      scroll.current.props.scrollToFocusedInput(reactNode)
    }
  }

  return (
    <View>
      {label && <Text>{label}</Text>}
      <CountryPicker
        countryCode={field.value}
        onSelect={(data) => field.onChange(data.cca2)}
        onFocus={(event) => {
          // `bind` the function if you're using ES6 classes
          _scrollToInput(findNodeHandle(event.target))
        }}
        containerButtonStyle={pickerSelectStyles.inputIOS}
        {...selectProps}
      />
      <Text style={styles.errorText}>{error && error.message}</Text>
    </View>
  )
}

export default FormCountrySelect
