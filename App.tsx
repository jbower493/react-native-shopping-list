import React from 'react'
import axios from 'axios'
import MainApp from 'src/mainApp'
import AuthContextProvider from 'src/containers/auth/authContext'

axios.defaults.baseURL = 'https://3542-122-110-208-224.au.ngrok.io'

const App = (): JSX.Element => (
    <AuthContextProvider>
        <MainApp />
    </AuthContextProvider>
)

export default App
