import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView } from 'react-native';
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
const yakıt = [
  { label: 'Doğal Gaz', value: 'Doğal Gaz' },
  { label: 'Dizel', value: 'Dizel' },
  { label: 'LPG', value: 'LPG' },
  { label: 'Asetilen', value: 'Asetilen' }, 
  { label: 'Benzin', value: 'Benzin' }, 
  { label: 'LNG', value: 'LNG' }, 
  { label: 'CNG', value: 'CNG' }, 
];
const kaynak = [
  { label: 'On Road (Kamyon, otobüs, araba vb.)', value: 'On Road (Kamyon, otobüs, araba vb.)' },
  { label: 'Off Road (Forklift, kepçe, dozer vb.)', value: 'Off Road (Forklift, kepçe, dozer vb.)' },
  { label: 'Off Road İki Zamanlı (Ot biçme makinesi vb.)', value: 'Off Road İki Zamanlı (Ot biçme makinesi vb.)' },
  { label: 'Off Road Dört Zamanlı (Çim biçme makinesi vb.)', value: 'Off Road Dört Zamanlı (Çim biçme makinesi vb.)' }, 
];
const birim = [
  { label: 'Ton', value: 'Ton' },
  { label: 'Lt', value: 'Lt' },
  { label: 'Sm3', value: 'Sm3' },
  { label: 'M3', value: 'M3' }, 
  { label: 'kWh', value: 'kWh' }, 
];


const CategoryC = () => {
  const [month, setMonth] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [emissionSource, setEmissionSource] = useState(null);
  const [VehicleId, setVehicleId] = useState(null);
  const [spendingAmount, setSpendingAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
  const handleSave = async () => {
    if (month && fuel && emissionSource && VehicleId && spendingAmount && unit) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "Şirket Araçlarının Yakıt Tüketimi"), {
          month,
          fuel,
          emissionSource,
          VehicleId,
          spendingAmount,
          unit,
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
  keyboardShouldPersistTaps='handled'
>
    <View style={styles.whole}>
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
          data={yakıt}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Yakıt Seçin'
          searchPlaceholder="Search..."
          value={fuel}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setFuel(item.value);
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
          data={kaynak}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Emisyon Kaynağı Seçin'
          searchPlaceholder="Search..."
          value={emissionSource}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setEmissionSource(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Araç ID"
          value={VehicleId}
          onChangeText={(text) => setVehicleId(text)}
          type="number"
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Tüketim Miktarı"
          value={spendingAmount}
          onChangeText={(text) => setSpendingAmount(text)}
          type="number"
          keyboardType='numeric'
        />
      </View>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={birim}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Birim Seçin'
          searchPlaceholder="Search..."
          value={unit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setUnit(item.value);
            setIsFocus(false);
          }}
        />
      </View>
     
      <View style={styles.container}>
        <PrimaryButton onPress={handleSave}>Kaydet</PrimaryButton>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryC;

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
});