import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserRouter from 'src/router/userRouter'
import GuestRouter from 'src/router/guestRouter'
import { AuthContext, AuthContextValue } from 'src/containers/auth/authContext'

const MainApp = (): JSX.Element => {
    const auth = useContext<AuthContextValue>(AuthContext)
console.log(auth)
    return (
        <NavigationContainer>
            {auth.loggedIn
                ? <UserRouter />
                : <GuestRouter />}
        </NavigationContainer>
    )
}

export default MainApp
