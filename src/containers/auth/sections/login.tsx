import React, { useContext, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'
import Button from 'src/components/Button'
import { AuthContext, AuthContextValue, Statuses } from 'src/containers/auth/authContext'
import theme from 'src/styles'

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
    input: {
        height: 40,
        width: theme.button.width,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        padding: 10,
    },
})

interface LoginProps {
    navigation: any
}

const Login = ({ navigation }: LoginProps): JSX.Element => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {
        login,
        auth_login_status,
    } = useContext<AuthContextValue>(AuthContext)

    return auth_login_status === Statuses.Loading
        ? <Text>Loading</Text>
        : (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(value: string): void => setUsername(value)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(value: string): void => setPassword(value)}
                    value={password}
                />
                <Button
                    style={styles.loginButton}
                    text="Login"
                    onPress={() => login({
                        username,
                        password,
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
