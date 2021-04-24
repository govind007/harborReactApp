import React, { useRef } from 'react'
import { View, TextInput, Text, findNodeHandle } from 'react-native'
import { useTheme } from '@/Theme'
import styles from './styles'
import { useController } from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FormInput = (props) => {
  const { label, error, control, name, validationRules, ...inputProps } = props
  const { Common, Color } = useTheme()
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
    <KeyboardAwareScrollView
      innerRef={(ref) => {
        scroll.current = ref
      }}
    >
      <View>
        {label && <Text>{label}</Text>}

        <TextInput
          autoCapitalize="none"
          value={field.value}
          onChangeText={field.onChange}
          style={[Common.textInput, error ? styles.inputError : styles.input]}
          onFocus={(event) => {
            // `bind` the function if you're using ES6 classes
            _scrollToInput(findNodeHandle(event.target))
          }}
          {...inputProps}
        />
        <Text style={styles.errorText}>{error && error.message}</Text>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default FormInput
