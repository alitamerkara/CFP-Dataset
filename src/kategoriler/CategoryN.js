import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from '../components/PrimaryButton';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const ay = [
  { label: 'Ocak', value: 'Ocak' },
  { label: 'Şubat', value: 'Şubat' },
  { label: 'Mart', value: 'Mart' },
  { label: 'Nisan', value: 'Nisan' },
  { label: 'Mayıs', value: 'Mayıs' },
  { label: 'Haziran', value: 'Haziran'},
  { label: 'Temmuz', value: 'Temmuz' },
  { label: 'Ağustos', value: 'Ağustos' },
  { label: 'Eylül', value: 'Eylül' },
  { label: 'Ekim', value: 'Ekim' },
  { label: 'Kasım', value: 'Kasım' },
  { label: 'Aralık', value: 'Aralık' },
];
const satınAlım = [
  { label: 'İnşaat Malzemeleri Satın Alımı', value: 'İnşaat Malzemeleri Satın Alımı' },
  { label: 'Hizmet Sözleşmesi (temizlik, güvenlik, taşıma/lojistik vb.)', value: 'Hizmet Sözleşmesi (temizlik, güvenlik, taşıma/lojistik vb.)' },
  { label: 'Ofis Malzemeleri ve Ekipmanları Satın Alımı', value: 'Ofis Malzemeleri ve Ekipmanları Satın Alımı' },
  { label: 'Bilgisayar Yazılım ve Donanımları', value: 'Bilgisayar Yazılım ve Donanımları' }, 
  { label: 'İş Güvenliği ve Koruyucu Ekipmanlar', value: 'İş Güvenliği ve Koruyucu Ekipmanlar' }, 
  { label: 'Reklam ve Pazarlama Hizmetleri', value: 'Reklam ve Pazarlama Hizmetleri' },
  { label: 'Eğitim ve Gelişim Hizmetleri', value: 'Eğitim ve Gelişim Hizmetleri' }, 
  { label: 'Bakım ve Onarım Hizmetleri', value: 'Bakım ve Onarım Hizmetleri' },
  { label: 'Risk Analizi ve Yönetimi Hizmetleri', value: 'Risk Analizi ve Yönetimi Hizmetleri' },
  { label: 'Kalite Kontrol ve Test Hizmetleri', value: 'Kalite Kontrol ve Test Hizmetleri' },
  { label: 'Soğutma/Isıtma Sistemleri', value: 'Soğutma/Isıtma Sistemleri' },

];


const CategoryN = () => {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [buying, setBuying] = useState(null);
  const [buyingValue, setBuyingValue] = useState(null);
  const [buyingUnit, setBuyingUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
  const handleSave = async () => {
    if (year && month && buying && buyingValue && buyingUnit ) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "Satın Alınan Hizmetler Kaynaklı Emisyonlar"), {
          year,
          month,
          buying,
          buyingValue,
          buyingUnit,
          userEmail
        });
        alert('Bilgileriniz Kaydedildi!!');
        navigation.goBack();
      } catch (error) {
        console.error("Hata: ", error);
        alert('Veri kaydetme sırasında hata oluştu');
      }
    } else {
      alert('Lütfen tüm alanları doldurunuz');
    }
  };



  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'>
    <View style={styles.whole}>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Yıl"
          value={year}
          onChangeText={(text) => setYear(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={ay}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Ay Seçin'
          searchPlaceholder="Search..."
          value={month}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setMonth(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={satınAlım}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Satın Alma Kalemi'
          searchPlaceholder="Search..."
          value={buying}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setBuying(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.field}>
        <Text>Satın Alma Bedeli</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={buyingValue}
          onChangeText={(text) => setBuyingValue(text)}
          type="number"
          keyboardType="numeric"
        />
      </View> 
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Birim"
          value={buyingUnit}
          onChangeText={(text) => setBuyingUnit(text)}
          type="number"
        />
      </View> 
      </View>
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={handleSave}/>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryN;

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFFFE0',
    overflow: 'hidden',
  },
  container: {
    backgroundColor: '#FFFFE0',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#64d185',
    backgroundColor:"#FFFFE0",
    color:'green',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color:'green'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
  },
  field: {
    padding: 8,
    borderWidth:1,
    borderColor: '#4CAF50',
    borderRadius:8,
    margin:5
  },
});