import * as Font from 'expo-font';

export const bootstrap = async () => {
    await Font.loadAsync({
        'OpenSansBold': require('./../assets/fonts/OpenSans-Bold.ttf'),
        'OpenSansRegular': require('./../assets/fonts/OpenSans-Regular.ttf'),
    })
}