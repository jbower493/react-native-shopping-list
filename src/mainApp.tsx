import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import UserRouter from 'src/router/userRouter'
import GuestRouter from 'src/router/guestRouter'
import { AuthContext, AuthContextValue } from 'src/containers/auth/authContext'

const MainApp = (): JSX.Element => {
    const auth = useContext<AuthContextValue>(AuthContext)

    useEffect(() => {
        auth.getUser()
    }, [])

    const renderApp = () => (
        auth.auth_get_user_data
            ? <UserRouter />
            : <GuestRouter />
    )

    return (
        <NavigationContainer>
            {auth.auth_get_user_status === 'loading'
                ? <Text>Loading</Text>
                : renderApp()}
        </NavigationContainer>
    )
}

export default MainApp
