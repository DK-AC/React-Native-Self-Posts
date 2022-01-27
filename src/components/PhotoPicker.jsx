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


export const PhotoPicker = () => {
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
        console.log(pickImage)
    }

    return (
        <View style={styles.wrapper}>
            <Button title="Pick an image from camera roll" onPress={takePhoto}/>
            <Button title="request permissions" onPress={askForPermissions}/>
            {image && <Image source={{uri: image}} style={styles.img}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom:10
    },
    img: {
        width: '100%',
        height: 200,
        padding: 10
    }
})