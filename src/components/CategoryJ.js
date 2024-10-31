import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';

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
const faaliyet = [
  { label: 'Konaklama', value: 'Konaklama' },
  { label: 'Ulaşım', value: 'Ulaşım' },
];
const birim = [
  { label: 'Yolcu.km', value: 'Yolcu.km' },
  { label: 'Km', value: 'Km' }, 
  { label: 'Oda.Gece', value: 'Oda.Gece' },
];
const yakıt = [
  { label: 'Bilinmeyen', value: 'Bilinmeyen' },
  { label: 'Dizel', value: 'Dizel' },
  { label: 'LPG', value: 'LPG' },
  { label: 'Elektrik', value: 'Elektrik' }, 
  { label: 'Benzin', value: 'Benzin' }, 
];
const emisyon = [
  { label: 'Yakıtların Yanması', value: 'Yakıtların Yanması' },
  { label: 'WTT (Well To Tank)', value: 'WTT (Well To Tank)' },
];
const yol = [
  { label: 'Karayolu', value: 'Karayolu' },
  { label: 'Denizyolu', value: 'Denizyolu' },
  { label: 'Havayolu', value: 'Havayolu' },
  { label: 'Demiryolu', value: 'Demiryolu' },
];


const CategoryJ = () => {
  const [month, setMonth] = useState(null);
  const [reason, setReason] = useState(null);
  const [tripCountry, setTripCountry] = useState(null);
  const [road, setRoad] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [startLocation, setStartLocation] = useState(null);
  const [arriveLocation, setArriveLocation] = useState(null);
  const [emission, setEmission] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [unit, setUnit] = useState(null); 
  const [isFocus, setIsFocus] = useState(false);
  const handleSave = async () => {
    if (month && reason && tripCountry && road && vehicle && vehicleType && fuel && emission && startLocation && arriveLocation && activityValue && unit) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "İş Seyahatleri"), {
          month,
          reason,
          tripCountry,
          road,
          vehicle,
          vehicleType,
          fuel,
          startLocation,
          arriveLocation,
          emission,
          activityValue,
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
      <Text style={styles.title}>İş Seyahatleri</Text>
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
          data={faaliyet}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Emisyona Sebep Olan Faaliyet'
          searchPlaceholder="Search..."
          value={reason}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setReason(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Konaklamanın Yapıldığı Ülke"
          value={tripCountry}
          onChangeText={(text) => setTripCountry(text)}
        />
      </View>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={yol}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Taşımacılık Türü'
          searchPlaceholder="Search..."
          value={road}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setRoad(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Taşıt"
          value={vehicle}
          onChangeText={(text) => setVehicle(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Taşıt Tipi"
          value={vehicleType}
          onChangeText={(text) => setVehicleType(text)}
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
        <TextInput
          style={styles.dropdown}
          placeholder="Başlangıç Lokasyonu"
          value={startLocation}
          onChangeText={(text) => setStartLocation(text)}
          
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Varış Lokasyonu"
          value={arriveLocation}
          onChangeText={(text) => setArriveLocation(text)}
          
        />
      </View>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={emisyon}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Emisyon Türü'
          searchPlaceholder="Search..."
          value={emission}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setEmission(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.field}>
        <Text>Faaliyet Verisi</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={activityValue}
          onChangeText={(text) => setActivityValue(text)}
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
          data={birim}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Birim'
          searchPlaceholder="Search..."
          value={unit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setUnit(item.label);
            setIsFocus(false);
          }}
          dropdownPosition='top'
        />
      </View>
      </View>
      <View style={styles.container}>
        <PrimaryButton onPress={handleSave}>Kaydet</PrimaryButton>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryJ;

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFFFE0',
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    color: 'green',
    marginVertical: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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