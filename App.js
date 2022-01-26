import {StatusBar} from 'expo-status-bar';
import {useState} from "react";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigation} from "./src/navigation/AppNavigation";
import {bootstrap} from "./src/bootstrap";
import {Provider} from "react-redux";
import {store} from "./src/store/store";


export default function App() {

    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading startAsync={bootstrap}
                           onFinish={() => setIsReady(true)}
                           onError={(err) => console.log(err)}
        />
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar style={'auto'}/>
                <AppNavigation/>
            </NavigationContainer>
        </Provider>
    );
}
