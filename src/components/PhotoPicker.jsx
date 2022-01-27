import {Alert, Button, Image, StyleSheet, View} from 'react-native'
import {useState} from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const askForPermissions = async () => {
    const {status} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.MEDIA_LIBRARY,
    );
    if (status !== 'granted') {
        Alert.alert('Вы не дали прав на создание фото')
        return false
    } else {
        return true
    }
};


export const PhotoPicker = ({onPick}) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions()
        if (!hasPermissions) {
            return
        }

        const pickImage = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })
        setImage(pickImage.uri)
        onPick(pickImage.uri)

    }

    return (
        <View style={styles.wrapper}>
            <Button title='Сделать фото' onPress={takePhoto}/>
            {image && <Image style={styles.img} source={{uri: image}}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: 200,
        padding: 10
    }
})