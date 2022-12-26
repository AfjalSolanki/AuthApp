import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../contants'
import { Display } from '../utils'

const ButtomComman = ({
    Title,
    onPress
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.signinButton}
            onPress={onPress}>
            <Text style={styles.signinButtonText}>{Title}</Text>
        </TouchableOpacity>
    )
}

export default ButtomComman

const styles = StyleSheet.create({
    signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
})