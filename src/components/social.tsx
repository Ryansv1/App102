import { Text ,View, StyleSheet, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router'
import { Ionicons, FontAwesome } from '@expo/vector-icons'




import SocialButton from './socialButton'

export default function Social(){
    return(
        <View style={styles.bgContainer}>
        <Text style={styles.titulo}>Nos siga nas redes sociais para não perder nadinha do que acontece aqui na 102.9!</Text>
            <SocialButton iconName="logo-instagram" network="Instagram" url="https://instagram.com/radio102.9fm?" />
            <SocialButton iconName="logo-facebook" network="Facebook" url="https://facebook.com/radio102.9fm" />
            <SocialButton iconName="ios-logo-youtube" network="YouTube" url="https://youtube.com/@RadioFM-px7uk" />
        </View>
    )
}

const styles = StyleSheet.create({
    bgContainer:{
        flex: 1,
        width: '95%',
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
    titulo:{
        textAlign: 'center',
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: '800'
    }
})