
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'


import Images from '@/src/components/images'
import { StatusBar } from 'expo-status-bar'

export default function Home(){
    return (
        <SafeAreaView style={styles.bgColor}>
            <StatusBar style="dark"/>
            <Images></Images>
            <Text style={styles.textoBox}>Em breve notícias do Portal Amorim!</Text>
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
        fontSize: 16
    }
})