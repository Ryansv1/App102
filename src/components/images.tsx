import { View, Image, StyleSheet} from 'react-native'
import ContainerPrincipal from './container'

export default function Images(){
    return(
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.imagens} source={require('../../assets/images/radioLogo.png')} />
            <Image resizeMode="contain" style={styles.imagens}source={require('../../assets/images/portalLogo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagens:{
        maxWidth: '45%',
        maxHeight: '30%',
        margin: '1%'
    }
})