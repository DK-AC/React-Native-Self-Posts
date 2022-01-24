import {StatusBar} from 'expo-status-bar';
import {useState} from "react";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigation} from "./src/navigation/AppNavigation";
import {useFonts} from "expo-font";


export default function App() {

    const [loaded] = useFonts({
        Open_Sans_Regular: require('./assets/fonts/OpenSans-Regular.ttf'),
        Open_Sans_Bold: require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    // if (!loaded) {
    //     return null
    // }

    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading startAsync={() => {
        }}
                           onFinish={() => setIsReady(true)}
                           onError={(err) => console.log(err)}
        />
    }

    return (
        <NavigationContainer>
            <StatusBar style={'auto'}/>
            <AppNavigation/>
        </NavigationContainer>
    );
}
