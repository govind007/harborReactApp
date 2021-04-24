import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import DefaultTheme from './DefaultTheme'

export default buildSlice('theme', [DefaultTheme], {
  theme: null,
  darkMode: null,
}).reducer
