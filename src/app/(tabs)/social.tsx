import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

import Images from '@/src/components/images'
import Social from '@/src/components/social'



export default function Home(){
    return (
        <SafeAreaView style={styles.bgColor}>
            <StatusBar style="dark"/>
            <Images></Images>
            <Social></Social>
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