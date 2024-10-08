import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
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
const tip = [
  { label: 'R12', value: '1' },
  { label: 'R134A', value: '2' },
  { label: 'R32', value: '3' },
  { label: 'R143A', value: '4' }, 
  { label: 'R407C', value: '5' },
  { label: 'FM200', value: '6' },
  { label: 'CO2', value: '7' },
  { label: 'R600A', value: '8' },
  { label: 'R22', value: '9' },
  { label: 'R404A', value: '10' },
  { label: 'R410A', value: '11' },
];
const kaynak = [
  { label: 'Buzdolabı', value: '1' },
  { label: 'Klima', value: '2' },
  { label: 'Chiller', value: '3' },
  { label: 'VRF(Variable Refrigerant Flow)', value: '4' }, 
  { label: 'Yangın Baskılama Sistemi', value: '5' }, 
  { label: 'Gazlı Akım Kesici (Alçak Gerilim)', value: '6' }, 
  { label: 'Gazlı Akım Kesici (Yüksek Gerilim) ', value: '7' }, 
  { label: 'Gazlı Akım Ayırıcı (Alçak Gerilim)', value: '8' }, 
  { label: 'Gazlı Akım Ayırıcı (Yüksek Gerilim)', value: '9' },
  { label: 'Su Sebili', value: '10' },
];
const birim = [
  { label: 'Ton', value: '1' },
  { label: 'Kg', value: '2' },
];


const CategoryB = () => {
  const [month, setMonth] = useState(null);
  const [source, setSource] = useState(null);
  const [id, setId] = useState(null);
  const [type, setType] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [charge, setCharge] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
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
          data={kaynak}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Kaynak Seçin'
          searchPlaceholder="Search..."
          value={source}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSource(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Ekipman ID"
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
          data={tip}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Sera Gazı Cinsi Seçin'
          searchPlaceholder="Search..."
          value={type}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setType(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Kapasite"
          value={capacity}
          onChangeText={(text) => setCapacity(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Şarj / Dolum Miktarı"
          value={capacity}
          onChangeText={(text) => setCapacity(text)}
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
          placeholder='Birim Seçin'
          searchPlaceholder="Search..."
          value={source}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSource(item.value);
            setIsFocus(false);
          }}
        />
      </View>
     
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={() => alert('Bilgileriniz Kaydedildi!')}/>
      </View>
    </View>
  );
};

export default CategoryB;

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