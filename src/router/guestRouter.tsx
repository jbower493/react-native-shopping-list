import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from 'src/containers/auth/sections/register'
import Login from 'src/containers/auth/sections/login'

const Stack = createNativeStackNavigator()

const GuestRouter = (): JSX.Element => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
)

export default GuestRouter
