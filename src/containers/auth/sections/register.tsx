import React from 'react'
import {
    Text,
    View,
    Button,
    ViewStyle,
    StyleSheet,
} from 'react-native'
import theme from 'src/styles'

type Style = {
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: theme.page,
})

interface RegisterProps {
    navigation: any
}

const Register = ({ navigation }: RegisterProps): JSX.Element => (
    <View style={styles.container}>
        <Text>Register</Text>
        <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
        />
    </View>
)

export default Register
