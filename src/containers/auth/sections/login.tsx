import React, { useContext } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'
import styles from 'src/styles'
import { AuthContext, AuthContextValue } from 'src/containers/auth/authContext'

interface LoginProps {
    navigation: any
}

const Login = ({ navigation }: LoginProps): JSX.Element => {
    const auth = useContext<AuthContextValue>(AuthContext)

    return (
        <View style={styles.centered}>
            <Text>Login</Text>
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title="Login to App"
                onPress={auth.login}
            />
            <Text>{auth.loggedIn ? 'Mate' : 'not mate'}</Text>
        </View>
    )
}

export default Login
