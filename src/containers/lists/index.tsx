import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Lists = (): JSX.Element => (
    <View style={styles.centered}>
        <Text>List</Text>
    </View>
)

export default Lists
