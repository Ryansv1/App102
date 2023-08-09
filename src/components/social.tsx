import { Text ,View, StyleSheet, TouchableOpacity} from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'


export default function Social(){
    return(
        <View style={styles.bgContainer}>
                <Text style={styles.titulo}>Nos siga nas redes sociais para não perder nadinha do que acontece aqui na 102.9!</Text>
                <TouchableOpacity style={styles.row} onPress={()=>{console.log('instagram')}}>
                    <Ionicons name="logo-instagram" size={48} color={'dark'} />
                    <Text style={styles.text}>Instagram</Text>
                </TouchableOpacity>

        
                <TouchableOpacity style={styles.row} onPress={()=>{console.log('instagram')}}>
                    <Ionicons name="ios-logo-youtube" size={48} color={'dark'} />
                    <Text style={styles.text}>Youtube</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.row} onPress={()=>{console.log('instagram')}}>
                    <FontAwesome name="facebook-square" size={48} color="black" />
                    <Text style={styles.text}>Facebook</Text>
                </TouchableOpacity>

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
    row:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#d4d6d6',
        width: '90%',
        borderRadius: 10,
        borderWidth: 3,
        padding: '3%'
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