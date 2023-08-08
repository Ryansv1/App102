import { Tabs } from 'expo-router';
import { AntDesign, Feather, Ionicons} from '@expo/vector-icons';

export default function AppLayout(){
    return(
    <Tabs screenOptions={{ headerShown: false}}>
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({size, color}) => <AntDesign name="home" size={size} color={color} />
            }}
        />
        <Tabs.Screen
            name="news"
            options={{
                title: "Notícias",
                tabBarIcon: ({size, color}) => <Ionicons name="newspaper-outline" size={size} color={color} />

            }}
        />
        <Tabs.Screen
        name="videos"
        options={{
            title: "Videos",
            tabBarIcon: ({size, color}) => <Feather name="youtube" size={size} color={color} />
        }}
        />
        <Tabs.Screen
        name="social"
        options={{
            title: "Redes Sociais",
            tabBarIcon: ({size, color}) => <AntDesign name="sharealt" size={size} color={color} />
        }}
        />
    </Tabs>
    )
}