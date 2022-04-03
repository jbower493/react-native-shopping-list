import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

interface LoginProps {
    navigation: any
}

const Login = ({ navigation }: LoginProps): JSX.Element => (
    <View style={styles.centered}>
        <Text>Login</Text>
        <Button
            title="Go to Register"
            onPress={() => navigation.navigate('Register')}
        />
    </View>
)

export default Login
