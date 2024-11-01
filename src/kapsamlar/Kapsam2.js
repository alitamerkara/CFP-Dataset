import { View, StyleSheet,TouchableOpacity, Text,ImageBackground, } from 'react-native';

export default function Kapsam2({ navigation }) {

  return (
          <View style={styles.container}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Isıtma ve Soğutmada Kullanılan Diğer Gazlar")}}>
          <ImageBackground source={require('../../assets/kategori/diğer gaz.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Isıtma ve Soğutmada Kullanılan Diğer Gazlar</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Elektrik Tüketim Emisyonu")}}>
          <ImageBackground source={require('../../assets/kategori/elektrik.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Elektrik Tüketim Emisyonu</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
            
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#d4edda',
    alignItems: 'center',
  },
  card:{
    width: 360,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: 360,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    marginTop:10,
    zIndex: 1,
  },
  text:{
    width: "70%",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 30,
  }
});