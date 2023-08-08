import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen } from 'expo-router'
import { Audio } from 'expo-av'

import ContainerPrincipal from '@/src/components/container'
import Images from '@/src/components/images'
import ButtonSintonize from '@/src/components/button'




export default function Home(){
    const [estado, atualizaEstado] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);
    
    const sound = new Audio.Sound();
    useEffect(() => {
      const loadAudio = async () => {
        SplashScreen.preventAutoHideAsync();
  
        try {
          await sound.loadAsync({
            uri: 'http://stm43.conectastm.com:7790/;?type=http&nocache=271'
          }, {shouldPlay: false});
          setIsLoaded(true);
          SplashScreen.hideAsync();
          console.log('acabou')
        } catch (error) {
          console.error('Error loading audio:', error);
        }
      };
  
      loadAudio();
    }, []);

    async function playSound(){
        if(sound){
            await sound.playAsync()
        }
    }

    return (
        <SafeAreaView style={styles.bgColor}>
            <StatusBar style="dark"/>
            <Images />
            <ContainerPrincipal>
                <ButtonSintonize tituloEstado={'SINTONIZAR!'} disabled={!isLoaded}onPress={playSound} />
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