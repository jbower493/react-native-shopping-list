import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Lists from 'src/containers/lists'

const Stack = createNativeStackNavigator()

const UserRouter = (): JSX.Element => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Lists" component={Lists} />
    </Stack.Navigator>
)

export default UserRouter
