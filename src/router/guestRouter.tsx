import React from 'react'
import { View, Text } from 'react-native'
import {
    NativeRouter,
    Route,
    Routes,
    Link,
} from 'react-router-native'

const GuestRouter = () => (
    <NativeRouter>
        <Routes>
            <Route
                path="/"
                element={(
                    <View>
                        <Text>Home page</Text>
                        <Link to="/register"><Text>Go to register</Text></Link>
                    </View>
                )}
            />
            <Route
                path="register"
                element={(
                    <View>
                        <Text>Register page</Text>
                        <Link to="/"><Text>Go to home</Text></Link>
                    </View>
                )}
            />
        </Routes>
    </NativeRouter>
)

export default GuestRouter
