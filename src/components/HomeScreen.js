import React from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
const navigation = useNavigation();
    return (
        <ImageBackground 
            source={{ uri: 'https://plus.unsplash.com/premium_photo-1681987448179-4a93b7975018?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.overlay} />
                <Image 
                    source={{ uri: 'https://dggerikazanim.com/wp-content/uploads/2023/06/dg-logoweb.png' }} 
                    style={styles.image} 
                />
                <Text style={styles.title}>CFP Veri Setine Hoşgeldiniz</Text>
                <Text style={styles.subtitle}>Yan Menüyü Kullanarak veya Butona Basarak Başlayabilirsiniz</Text>
                <Button 
                    title="Başla" 
                    onPress={() => navigation.openDrawer()} 
                    color="#045909"
                />
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
        backgroundColor: 'rgba(245, 245, 245, 0.7)', 
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
        color: "#48c24d",
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