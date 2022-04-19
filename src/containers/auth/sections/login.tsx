import React, { useContext } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import Button from 'src/components/Button'
import { AuthContext, AuthContextValue } from 'src/containers/auth/authContext'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        marginBottom: 20,
    },
})

interface LoginProps {
    navigation: any
}

const Login = ({ navigation }: LoginProps): JSX.Element => {
    const auth = useContext<AuthContextValue>(AuthContext)

    return (
        <View style={styles.container}>
            <Button
                style={styles.loginButton}
                text="Login"
                onPress={() => auth.login({
                    username: 'Jamie',
                    password: 'password',
                })}
            />
            <Button
                text="Go to Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    )
}

export default Login
