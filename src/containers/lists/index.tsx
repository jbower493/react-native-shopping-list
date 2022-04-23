import React, { useContext } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import Button from 'src/components/Button'
import { AuthContext, AuthContextValue } from 'src/containers/auth/authContext'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Lists = (): JSX.Element => {
    const { logout } = useContext<AuthContextValue>(AuthContext)

    return (
        <View style={styles.centered}>
            <Text>List</Text>
            <Button
                text="Logout"
                onPress={logout}
            />
        </View>
    )
}

export default Lists
