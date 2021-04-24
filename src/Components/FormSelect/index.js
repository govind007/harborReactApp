import React, { useRef } from 'react'
import { View, Text, findNodeHandle } from 'react-native'
import styles, { pickerSelectStyles } from './styles'
import { useController } from 'react-hook-form'
import RNPickerSelect from 'react-native-picker-select'

const FormSelect = (props) => {
  const { label, error, control, name, validationRules, ...selectProps } = props
  const { field } = useController({
    control,
    defaultValue: '',
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

      <RNPickerSelect
        value={field.value}
        onValueChange={field.onChange}
        style={pickerSelectStyles}
        onFocus={(event) => {
          // `bind` the function if you're using ES6 classes
          _scrollToInput(findNodeHandle(event.target))
        }}
        {...selectProps}
      />
      <Text style={styles.errorText}>{error && error.message}</Text>
    </View>
  )
}

export default FormSelect
