import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  selectError: {
    borderColor: '#dc3545',
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 20,
  },
})

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#c0cbd3',
    borderRadius: 4,
    color: 'black',
    backgroundColor: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})

export default styles
