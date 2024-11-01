import { View, StyleSheet,TouchableOpacity, Text,ImageBackground, Platform, } from 'react-native';

export default function Kapsam1({ navigation }) {

  return (
          <View style={styles.container}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Üretim Süreçlerinde Kullanılan Yakıt Emisyonları")}}>
          <ImageBackground source={require('../../assets/kategori/üretim süreci.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Üretim Süreçlerinde Kullanılan Yakıt Emisyonları</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Şirket Araçlarının Yakıt Tüketimi")}}>
          <ImageBackground source={require('../../assets/kategori/şirket araç.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Şirket Araçlarının Yakıt Tüketimi</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Isıtma ve Soğutmada Kullanılan Yakıt Türleri")}}>
          <ImageBackground source={require('../../assets/kategori/ısıtma yakıt.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Isıtma ve Soğutmada Kullanılan Yakıt Türleri</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Taşımacılık")}}>
          <ImageBackground source={require('../../assets/kategori/taşımacılık.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Taşımacılık</Text>
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