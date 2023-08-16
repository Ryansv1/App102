import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Alert} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen } from 'expo-router'
import { Audio } from 'expo-av'

import ContainerPrincipal from '@/src/components/container'
import Images from '@/src/components/images'
import ButtonSintonize from '@/src/components/button'


const sound = new Audio.Sound
sound.loadAsync(
    {uri: 'http://stm43.conectastm.com:7790/.m3u8'},
    {shouldPlay: false}
)


export default function Home(){
    const [soundIsPlaying, setSoundIsPlaying] = useState<true | false>(false)
    const [stateTela, setStateTela] = useState<true | false>(false)
    const [title, setTitle] = useState('SINTONIZAR!')
    
    sound._onPlaybackStatusUpdate = status =>{
        if(!status.isLoaded){
            setStateTela(true)
        } else {
            setStateTela(false)
        }
    }
    
    sound.setOnPlaybackStatusUpdate(sound._onPlaybackStatusUpdate);
    

    async function playAudioAndVerifyStatus(){
        try {
            if(soundIsPlaying != true){
                sound.playAsync()
                setSoundIsPlaying(!soundIsPlaying)
                setTitle('Pausar Reprodução!')
            } else {
                sound.pauseAsync()
                setSoundIsPlaying(!soundIsPlaying)
                setTitle('SINTONIZAR')
            }
        } catch (err: unknown){
            Alert.alert('Erro na Reprodução', 'Código do erro:' + err)
        }
    }

    return (
        <SafeAreaView style={styles.bgColor}>
            <StatusBar style="dark"/>
            <Images />
            <ContainerPrincipal>
                <ButtonSintonize disabled={stateTela} isLoading={stateTela} style={styles.button} tituloEstado={title} onPress={playAudioAndVerifyStatus}/>
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
    },
})