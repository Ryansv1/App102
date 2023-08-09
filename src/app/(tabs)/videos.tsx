import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

import Images from '@/src/components/images'

export default function Home(){
    return (
        <SafeAreaView style={styles.bgColor}>
            <StatusBar style="dark"/>
            <Images></Images>
            <Text style={styles.textoBox}>Em breve vídeos de programas ao-vivo!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgColor:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center'
    },
    textoBox:{
        textAlign: 'center',
        fontSize: 16,
    }
})