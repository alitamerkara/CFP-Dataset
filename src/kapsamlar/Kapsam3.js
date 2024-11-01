import { View, StyleSheet,TouchableOpacity, Text,ImageBackground, ScrollView, } from 'react-native';

export default function Kapsam1({ navigation }) {

  return (
    <ScrollView>
          <View style={styles.container}>
          <TouchableOpacity onPress={()=>{navigation.navigate("İşe Gidiş - Geliş")}}>
          <ImageBackground source={require('../../assets/kategori/işe gidiş.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>İşe Gidiş - Geliş</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Müşterilerin Tesise Gelişi")}}>
          <ImageBackground source={require('../../assets/kategori/müşteri tesis.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Müşterilerin Tesise Gelişi</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("İş Seyahatleri")}}>
          <ImageBackground source={require('../../assets/kategori/iş seyahat.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>İş Seyahatleri</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Sarf Malzeme")}}>
          <ImageBackground source={require('../../assets/kategori/sarf.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Sarf Malzeme</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Duran Varlık")}}>
          <ImageBackground source={require('../../assets/kategori/duran.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Duran Varlık</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Atık Yönetimi")}}>
          <ImageBackground source={require('../../assets/kategori/atık.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Atık Yönetimi</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Satın Alınan Hizmetler")}}>
          <ImageBackground source={require('../../assets/kategori/satın alınan hizmet.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Satın Alınan Hizmetler</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Satışı Yapılan Ürünlerin Kullanımı Kaynaklı")}}>
          <ImageBackground source={require('../../assets/kategori/satış yapılan 2.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Satışı Yapılan Ürünlerin Kullanımı Kaynaklı</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Kiraya Verilen Ekipmanların Kullanımı Kaynaklı")}}>
          <ImageBackground source={require('../../assets/kategori/kira.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Kiraya Verilen Ekipmanların Kullanımı Kaynaklı</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("Satışı Yapılan Ürün Kaynaklı")}}>
          <ImageBackground source={require('../../assets/kategori/satışı yapılan.png')} style={styles.background}>
          <View  style={styles.card}>
            <Text style={styles.text}>Satışı Yapılan Ürün Kaynaklı</Text>
          </View>
          </ImageBackground>
          </TouchableOpacity>
            </View>
            </ScrollView>
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