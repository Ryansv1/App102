import React from 'react'
import { StyleSheet, TouchableOpacity, Text} from 'react-native'

interface Props {
    onPress: any,
    tituloEstado: string,
    style: object
}

export default function ButtonSintonize(props: Props){
    return(
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <Text style={styles.text}>{props.tituloEstado}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontWeight: '800',
        fontStyle: 'italic'
    }
})
