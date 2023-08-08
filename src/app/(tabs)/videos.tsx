import { DarkTheme } from '@react-navigation/native'
import { StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native'


export default function Home(){
    return (
        <SafeAreaView style={styles.bgColor}>
            
            <Text style={styles.textoBox}>Em breve vídeos de programas ao-vivo!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgColor:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBox:{
        textAlign: 'center',
        fontSize: 16
    }
})