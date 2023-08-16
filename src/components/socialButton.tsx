import { TouchableOpacity, StyleSheet, Text, Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking'

interface Props {
    network: string,
    url: string,
    iconName: any
}

export default function SocialButton({network, url, iconName}: Props){
    const openSocialLink = async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.error(`Não é possível abrir o link: ${url}`);
        }
      };
    
    return(
        <TouchableOpacity style={styles.row} onPress={openSocialLink}>
                <Ionicons name={iconName} size={48} color="black" />
                <Text style={styles.text}>{network}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#d4d6d6',
        width: '90%',
        borderRadius: 10,
        borderWidth: 3,
        ...Platform.select({
            web:{
                padding: '1%'
            },
            ios:{
                padding: '3%'
            },
            android:{
                padding: '3%'
            }
        })
    },
    text:{
        marginLeft: '10%',
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: '800'
    },
    titulo:{
        textAlign: 'center',
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: '800'
    }
})