import React from 'react'
import axios from 'axios'
import MainApp from 'src/mainApp'
import AuthContextProvider from 'src/containers/auth/authContext'
import ListsContextProvider from 'src/containers/lists/listsContext'

axios.defaults.baseURL = 'https://8c5e-86-11-142-5.eu.ngrok.io'

const App = (): JSX.Element => (
    <AuthContextProvider>
        <ListsContextProvider>
            <MainApp />
        </ListsContextProvider>
    </AuthContextProvider>
)

export default App
