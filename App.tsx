import React from 'react'
import { StyleSheet } from 'react-native'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import UserRouter from 'src/router/userRouter'
import GuestRouter from './src/router/guestRouter'

axios.defaults.baseURL = 'localhost:4500'
axios.defaults.withCredentials = true

const loggedIn: Boolean = false

const App = (): JSX.Element => (
    <NavigationContainer>
        {loggedIn
            ? <UserRouter />
            : <GuestRouter />}
    </NavigationContainer>
)

export default App
