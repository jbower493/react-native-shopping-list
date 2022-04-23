import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import UserRouter from 'src/router/userRouter'
import GuestRouter from 'src/router/guestRouter'
import { AuthContext, AuthContextValue, Statuses } from 'src/containers/auth/authContext'

const MainApp = (): JSX.Element => {
    const {
        getUser,
        auth_get_user_status,
        auth_get_user_data,
        auth_logout_status,
    } = useContext<AuthContextValue>(AuthContext)

    useEffect(() => {
        getUser()
    }, [])

    const renderApp = () => (
        auth_get_user_data
            ? <UserRouter />
            : <GuestRouter />
    )

    return (
        <NavigationContainer>
            {auth_get_user_status === Statuses.Loading || auth_logout_status === Statuses.Loading
                ? <Text>Loading</Text>
                : renderApp()}
        </NavigationContainer>
    )
}

export default MainApp
