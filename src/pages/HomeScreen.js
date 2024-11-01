import React from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';


const HomeScreen = () => {
const navigation = useNavigation();
const handlePress=()=>{
    navigation.openDrawer()
}
    return (
       
        <ImageBackground 
            source={require("../../assets/bg1.png") }
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.overlay} />
                <Image 
                    source={require("../../assets/dg.png")} 
                    style={styles.image} 
                />
                <Text style={styles.title}>CFP Veri Setine Hoşgeldiniz</Text>
                <Text style={styles.subtitle}>Yan Menüyü Kullanarak veya Butona Basarak Başlayabilirsiniz</Text>
                <PrimaryButton children={"Başla"} onPress={handlePress}/>
          </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(245, 245, 245, 0.6)', 
        padding: 20,
    },
    image: {
        width: 350,
        height: 200,
        marginBottom: 20,
        
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "green",
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#17821c',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default HomeScreen;