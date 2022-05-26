import React, { useContext, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import Button from 'src/components/Button'
import { AuthContext, AuthContextValue, Statuses } from 'src/containers/auth/authContext'
import { ListsContext, ListsContextValue, List } from 'src/containers/lists/listsContext'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Lists = (): JSX.Element => {
    const { logout } = useContext<AuthContextValue>(AuthContext)
    const {
        getLists,
        lists_get_lists_status,
        lists_get_lists_data,
    } = useContext<ListsContextValue>(ListsContext)

    useEffect(() => {
        getLists()
    }, [])

    return lists_get_lists_status === Statuses.Loading
        ? <Text>Fetching lists</Text>
        : (
            <View style={styles.centered}>
                <Text>Lists</Text>
                {lists_get_lists_data?.map((list: List, index: number): JSX.Element => (
                    <Text key={index} >{list.name}</Text>
                ))}
                <Button
                    text="Logout"
                    onPress={logout}
                />
            </View>
        )
}

export default Lists
