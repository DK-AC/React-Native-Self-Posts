import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {useState} from "react";
import AppLoading from 'expo-app-loading';
import {bootstrap} from "./src/bootstrap";

export default function App() {

    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading startAsync={bootstrap}
                           onFinish={() => setIsReady(true)}
                           onError={(err) => console.log(err)}
        />
    }

    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
