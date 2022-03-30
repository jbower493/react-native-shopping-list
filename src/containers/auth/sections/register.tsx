import React from 'react'
import { Text, View, Button } from 'react-native'
import { useNavigate } from 'react-router-native'

const Register = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <View>
            <Text>Register</Text>
            <Button title="Go to Login" onPress={() => navigate('/login')} />
        </View>
    )
}

export default Register
