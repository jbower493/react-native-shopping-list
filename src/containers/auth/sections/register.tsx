import React from 'react'
import {
    Text,
    View,
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

interface RegisterProps {
    navigation: any
}

const Register = ({ navigation }: RegisterProps): JSX.Element => (
    <View style={styles.centered}>
        <Text>Register</Text>
        <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
        />
    </View>
)

export default Register
