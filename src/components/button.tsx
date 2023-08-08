import React from 'react'
import { StyleSheet, Button } from 'react-native'

interface Props {
    onPress: any,
    tituloEstado: string,
    disabled: boolean
}

export default function ButtonSintonize(props: Props){
    return(
        <Button disabled={props.disabled} title={props.tituloEstado} onPress={props.onPress}/>
    )
}
