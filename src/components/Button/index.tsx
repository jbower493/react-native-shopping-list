import React from 'react'
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    TouchableHighlight,
    View,
    Text,
} from 'react-native'

const styles = StyleSheet.create({
    touachable: {
        width: 150,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
})

interface ButtonProps {
    text: string;
    onPress: () => void,
    style?: StyleProp<ViewStyle>,
}

const Button = ({ text, onPress, style = {} }: ButtonProps) => (
    <TouchableHighlight style={[styles.touachable, style || {}]} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    </TouchableHighlight>
)

export default Button
