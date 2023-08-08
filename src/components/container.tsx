import { View, Text, StyleSheet, Button} from 'react-native'
import { useState } from 'react'

interface Props {
    children: any,
}

export default function ContainerPrincipal({children}: Props){

    const[tituloEstado, atualizaTituloEstado] = useState('SINTONIZE!')
    return(
        <View style={styles.bgContainer}>
            <Text style={styles.textStyle}>
                A mais ouvida e potente da região agora no seu celular! {'\n'}{'\n'} Clique no botão abaixo e embarque na programação da Rádio que Se liga em Você!
            </Text>
            {children}
        </View>
    )    
}

/*{props.tituloEstado}*/
const styles = StyleSheet.create({
    bgContainer:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4097E8',
        borderTopWidth: 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderColor: '#000000'
    },
    textStyle:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18,
        marginHorizontal: '1%',
        paddingHorizontal: '2%'
    },
    buttonStyle:{
        backgroundColor: '#E8D529',
        padding: '7%',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 3
    }
})

