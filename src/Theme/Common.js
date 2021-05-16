/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundFB: {
        backgroundColor: Colors.facebook,
      },
      backgroundGoogle: {
        backgroundColor: Colors.google,
      },
      backgroundNativeEmail: {
        backgroundColor: Colors.nativeLogin,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      cardBackground: {
        backgroundColor: Colors.inputBackground,
      },
      cardShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      socialLoginButton: {
        paddingHorizontal: 15,
        paddingVertical: 12,
      },
      socialLoginButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
      },
    }),
  }
}
