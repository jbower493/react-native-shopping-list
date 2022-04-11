import React from 'react'
import axios from 'axios'
import MainApp from 'src/mainApp'
import AuthContextProvider from 'src/containers/auth/authContext'

axios.defaults.baseURL = 'https://c156-122-110-208-224.ngrok.io'

const App = (): JSX.Element => (
    <AuthContextProvider>
        <MainApp />
    </AuthContextProvider>
)

export default App
