import React from 'react'
import {
    NativeRouter,
    Route,
    Routes,
} from 'react-router-native'
import Auth from 'src/containers/auth'
import Register from 'src/containers/auth/sections/register'
import Login from 'src/containers/auth/sections/login'

const GuestRouter = (): JSX.Element => (
    <NativeRouter>
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </NativeRouter>
)

export default GuestRouter
