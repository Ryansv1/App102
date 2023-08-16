import React from 'react'
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator} from 'react-native'

interface Props {
    onPress: any,
    tituloEstado: string,
    style: object,
    isLoading: boolean,
    disabled: boolean
}

export default function ButtonSintonize(props: Props){
    return(
        <TouchableOpacity disabled={props.disabled} style={props.style} onPress={props.onPress}>
            {props.isLoading ? 
            (
                <ActivityIndicator animating={true} color="#000000"></ActivityIndicator>
            )
            :
            (
                <Text style={styles.text}>{props.tituloEstado}</Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontWeight: '800',
        fontStyle: 'italic'
    },
    textDisabled:{
        display: 'none'
    }
})
