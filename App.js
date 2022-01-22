import {StatusBar} from 'expo-status-bar';
import {useState} from "react";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigation} from "./src/navigation/AppNavigation";


export default function App() {

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
