import React, { useContext } from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'
import { AuthContext, AuthContextValue } from 'src/containers/auth/authContext'

interface LoginProps {
    navigation: any
}

const Login = ({ navigation }: LoginProps): JSX.Element => {
    const auth = useContext<AuthContextValue>(AuthContext)

    return (
        <View>
            <Text>Login</Text>
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title="Get User"
                onPress={auth.getUser}
            />
        </View>
    )
}

export default Login
