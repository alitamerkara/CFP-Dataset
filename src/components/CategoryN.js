import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View,ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';

const ay = [
  { label: 'Ocak', value: '1' },
  { label: 'Şubat', value: '2' },
  { label: 'Mart', value: '3' },
  { label: 'Nisan', value: '4' },
  { label: 'Mayıs', value: '5' },
  { label: 'Haziran', value: '6' },
  { label: 'Temmuz', value: '7' },
  { label: 'Ağustos', value: '8' },
  { label: 'Eylül', value: '9' },
  { label: 'Ekim', value: '10' },
  { label: 'Kasım', value: '11' },
  { label: 'Aralık', value: '12' }, 
];
const satınAlım = [
  { label: 'İnşaat Malzemeleri Satın Alımı', value: '1' },
  { label: 'Hizmet Sözleşmesi (temizlik, güvenlik, taşıma/lojistik vb.)', value: '2' },
  { label: 'Ofis Malzemeleri ve Ekipmanları Satın Alımı', value: '3' },
  { label: 'Bilgisayar Yazılım ve Donanımları', value: '4' }, 
  { label: 'İş Güvenliği ve Koruyucu Ekipmanlar', value: '5' }, 
  { label: 'Reklam ve Pazarlama Hizmetleri', value: '6' },
  { label: 'Eğitim ve Gelişim Hizmetleri', value: '7' }, 
  { label: 'Bakım ve Onarım Hizmetleri', value: '8' },
  { label: 'Risk Analizi ve Yönetimi Hizmetleri', value: '9' },
  { label: 'Kalite Kontrol ve Test Hizmetleri', value: '10' },
  { label: 'Soğutma/Isıtma Sistemleri', value: '11' },

];


const CategoryN = () => {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [buying, setBuying] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [unit, setUnit] = useState(null);
  const handleSave = async () => {
    if (year && month && buying && value && unit ) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "Satın Alınan Hizmetler Kaynaklı Emisyonlar"), {
          year,
          month,
          buying,
          value,
          unit,
          userEmail
        });
        alert('Bilgileriniz Kaydedildi!!');
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
      <Text style={styles.title}>Satın Alınan Hizmetler Kaynaklı Emisyonlar</Text>
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
          value={value}
          onChangeText={(text) => setValue(text)}
          type="number"
          keyboardType="numeric"
        />
      </View> 
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Birim"
          value={unit}
          onChangeText={(text) => setUnit(text)}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    padding: 8,
  },
});