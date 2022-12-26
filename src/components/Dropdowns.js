import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const Dropdowns = ({
    data = [],
    value = {},
    onSelect = () => { }
}) => {
    console.log("selected value", !!value)
    const [showoption, setshowoption] = useState(null);

    const onSelectedItem = (val) => {
        setshowoption(false)
        onSelect(val)
    }
    return (
        <View style={{margin:10}}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => setshowoption(!showoption)}
                style={styles.manview}>
                <Text style={{ color: '#9933CC', fontSize: 16,marginStart:7 }}>{!!value ? value?.name : 'Where did you hear about us?'}</Text>
                <Image style={{ ...styles.image, transform: [{ rotate: showoption ? '180deg' : '0deg', }], }}
                    source={require('../assets/images/drop-down-arrow.png')} />
            </TouchableOpacity>
            {showoption && (
                <View style={styles.view}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled">
                        {data.map((val, i) => {
                            return (
                                <TouchableOpacity
                                    key={String(i)}
                                    style={{
                                        ...styles.selectstyle,
                                    }}
                                    onPress={() => onSelectedItem(val)}>
                                    <Text style={{ fontSize: 17,marginStart:10, color: '#9933CC' }}>{val.name}</Text>

                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>

                </View>
            )}
        </View>
    )
}

export default Dropdowns

const styles = StyleSheet.create({

    selectstyle: {
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 4,
        height: 45,
        justifyContent: 'center',
        elevation:1,
        backgroundColor:'#fff'

    },
    manview: {
        backgroundColor: '#FFFFFF',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        backgroundColor: '#FFFFFF',
        elevation:2
    },
    view: {
        padding: 5,
        borderRadius: 10,
        maxHeight: 200,
        // backgroundColor:'red'
    },
    image: {
        width: 13,
        height: 13,
        resizeMode: 'contain',
        marginEnd:10


    }

})