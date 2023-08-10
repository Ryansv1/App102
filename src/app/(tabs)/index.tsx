import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen } from 'expo-router'
import { Audio } from 'expo-av'

import ContainerPrincipal from '@/src/components/container'
import Images from '@/src/components/images'
import ButtonSintonize from '@/src/components/button'

const sound = new Audio.Sound();
export default function Home(){

  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const titulo = isPlaying ? 'Pausar reprodução' : 'SINTONIZAR!';
  const [tchubirau, setTchubirau] = useState(false)
  

  async function loadSound() {
    try {
      await sound.loadAsync({
        uri: 'http://stm43.conectastm.com:7790'
      });
      setIsAudioLoaded(true);
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  }

  async function playSound() {
    try {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error playing/pausing audio:', error);
    }
  }

  useEffect(() => {
    loadSound();
    return () => {
      sound.unloadAsync(); // Limpa o áudio quando o componente é desmontado
    };
  }, []);

  useEffect(() => {
    console.log('a vei')
    if (isAudioLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isAudioLoaded]);


    return (
        <SafeAreaView style={styles.bgColor}>
            <StatusBar style="dark"/>
            <Images />
            <ContainerPrincipal>
                <ButtonSintonize style={styles.button} tituloEstado={titulo} onPress={playSound} />
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
    button:{
        backgroundColor: "#cfbc0c",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 3
    }
})