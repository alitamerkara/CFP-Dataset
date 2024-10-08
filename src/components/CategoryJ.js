import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';

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
const faaliyet = [
  { label: 'Konaklama', value: '1' },
  { label: 'Ulaşım', value: '2' },
];
const kaynak = [
  { label: 'On Road (Kamyon, otobüs, araba vb.)', value: '1' },
  { label: 'Off Road (Forklift, kepçe, dozer vb.)', value: '2' },
  { label: 'Off Road İki Zamanlı (Ot biçme makinesi vb.)', value: '3' },
  { label: 'Off Road Dört Zamanlı (Çim biçme makinesi vb.)', value: '4' }, 
];
const birim = [
  { label: 'Yolcu.km', value: '1' },
  { label: 'Km', value: '2' }, 
  { label: 'Oda.Gece', value: '3' },
];
const yakıt = [
  { label: 'Bilinmeyen', value: '1' },
  { label: 'Dizel', value: '2' },
  { label: 'LPG', value: '3' },
  { label: 'Elektrik', value: '4' }, 
  { label: 'Benzin', value: '5' }, 
];
const emisyon = [
  { label: 'Yakıtların Yanması', value: '1' },
  { label: 'WTT (Well To Tank)', value: '2' },
];
const yol = [
  { label: 'Karayolu', value: '1' },
  { label: 'Denizyolu', value: '2' },
  { label: 'Havayolu', value: '3' },
  { label: 'Demiryolu', value: '4' },
];


const CategoryJ = () => {
  const [month, setMonth] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [id, setId] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [road, setRoad] = useState(null);
  const [emission, setEmission] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);

  return (
    <ScrollView>
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
          placeholder="Konaklamanın Yapıldığı Ülke"
          value={vehicle}
          onChangeText={(text) => setVehicle(text)}
          type="number"
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
          type="number"
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Taşıt Tipi"
          value={vehicle}
          onChangeText={(text) => setVehicle(text)}
          type="number"
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
          value={id}
          onChangeText={(text) => setId(text)}
          type="number"
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Varış Lokasyonu"
          value={id}
          onChangeText={(text) => setId(text)}
          type="number"
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
          value={amount}
          onChangeText={(text) => setAmount(text)}
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
        <PrimaryButton onPress={() => alert('Bilgileriniz Kaydedildi!')}>Kaydet</PrimaryButton>
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