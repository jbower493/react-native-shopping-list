import React from 'react'
import axios from 'axios'
import MainApp from 'src/mainApp'
import AuthContextProvider from 'src/containers/auth/authContext'

axios.defaults.baseURL = 'localhost:4500'
axios.defaults.withCredentials = true

const App = (): JSX.Element => (
    <AuthContextProvider>
        <MainApp />
    </AuthContextProvider>
)

export default App
