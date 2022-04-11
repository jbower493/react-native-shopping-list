import React from 'react'
import {
    Text,
    View,
    Button,
} from 'react-native'

interface RegisterProps {
    navigation: any
}

const Register = ({ navigation }: RegisterProps): JSX.Element => (
    <View>
        <Text>Register</Text>
        <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
        />
    </View>
)

export default Register
