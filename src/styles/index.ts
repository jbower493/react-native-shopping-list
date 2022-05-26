import { ViewStyle } from 'react-native'

interface Theme {
    button: {
        width: number;
    },
    page: ViewStyle
}

const theme: Theme = {
    button: {
        width: 150,
    },
    page: {
        flex: 1,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default theme
