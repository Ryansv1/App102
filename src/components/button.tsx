import React from 'react'
import { StyleSheet, Pressable, Text} from 'react-native'

interface Props {
    onPress: () => void,
    tituloEstado: string,
    disabled: boolean,
    style: object
}

export default function ButtonSintonize(props: Props){
    return(
        <Pressable style={props.style} disabled={props.disabled} onPress={props.onPress}>
            <Text style={styles.text}>{props.tituloEstado}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontWeight: '800',
        fontStyle: 'italic'
    }
})
