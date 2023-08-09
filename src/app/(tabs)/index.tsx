import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen } from 'expo-router'
import { Audio } from 'expo-av'

import ContainerPrincipal from '@/src/components/container'
import Images from '@/src/components/images'
import ButtonSintonize from '@/src/components/button'
import { loadAsync } from 'expo-font'


SplashScreen.preventAutoHideAsync()


export default function Home(){
    const [estado, atualizaEstado] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);

    const sound = new Audio.Sound();
    
    
    async function loadSound(){
      await sound.loadAsync({
        uri: 'http://stm43.conectastm.com:7790'
      }, {shouldPlay: false})
      setIsLoaded(true)
      SplashScreen.hideAsync()
    }

    async function playSound(){
      try{
        await loadSound()
        await sound.playAsync()
      } catch (err){
        console.log(err)
      }
          
    }

    useEffect(()=>{
      loadSound()
    }, [])


    return (
        <SafeAreaView style={styles.bgColor}>
            <StatusBar style="dark"/>
            <Images />
            <ContainerPrincipal>
                <ButtonSintonize tituloEstado={'SINTONIZAR!'} disabled={!isLoaded} onPress={playSound} />
            </ContainerPrincipal>
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
})