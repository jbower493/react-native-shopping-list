import React from 'react'
import axios from 'axios'
import MainApp from 'src/mainApp'
import AuthContextProvider from 'src/containers/auth/authContext'

axios.defaults.baseURL = 'https://3a94-175-34-116-227.au.ngrok.io'

const App = (): JSX.Element => (
    <AuthContextProvider>
        <MainApp />
    </AuthContextProvider>
)

export default App
