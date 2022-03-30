import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    FlatList,
    ListRenderItem,
} from 'react-native'
import { useNavigate } from 'react-router-native'
// import { openDatabase } from 'expo-sqlite'

type Item = {
    title: string
    id: string
}

const tempItems: Item[] = [
    {
        title: 'Pototoes',
        id: '0',
    },
    {
        title: 'Steak',
        id: '1',
    },
    {
        title: 'Carrots',
        id: '2',
    },
]

const Login = (): JSX.Element => {
    const [items, setItems] = useState<Item[]>(tempItems)

    const navigate = useNavigate()

    const addBacon = (): void => {
        setItems([...items, { title: `bacon ${(items.length - 2).toString()}`, id: items.length.toString() }])
    }

    const renderItem: ListRenderItem<Item> = ({ item }) => (<Text>{item.title}</Text>)

    return (
        <View>
            <Text>Login</Text>
            <Button title="Go to Home" onPress={() => navigate('/')} />
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button title="Add bacon" onPress={addBacon} />
        </View>
    )
}

export default Login
