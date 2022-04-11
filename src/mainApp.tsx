import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserRouter from 'src/router/userRouter'
import GuestRouter from 'src/router/guestRouter'
import { AuthContext, AuthContextValue } from 'src/containers/auth/authContext'

const MainApp = (): JSX.Element => {
    const auth = useContext<AuthContextValue>(AuthContext)

    return (
        <NavigationContainer>
            {auth.auth_get_user_data
                ? <UserRouter />
                : <GuestRouter />}
        </NavigationContainer>
    )
}

export default MainApp
