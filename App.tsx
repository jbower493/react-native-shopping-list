import React from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'
import GuestRouter from './src/router/guestRouter'

axios.defaults.baseURL = 'localhost:4500'
axios.defaults.withCredentials = true

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const App = (): JSX.Element => (
    <View style={styles.container}>
        <GuestRouter />
    </View>
)

export default App
