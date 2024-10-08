import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';

const malzeme = [
  { label: 'Elektrik', value: '1' },
  { label: 'Kırtasiye', value: '2' },
  { label: 'Donanım', value: '3' },
  { label: 'Yazılım', value: '4' },
  { label: 'Bilgi İşlem Sarf', value: '5' },
];
const birim = [
  { label: 'Ton', value: '1' },
  { label: 'Lt', value: '2' },
  { label: 'Sm3', value: '3' },
  { label: 'M3', value: '4' }, 
  { label: 'kWh', value: '5' }, 
];


const CategoryK = () => {
  const [goods, setGoods] = useState(null);
  const [id, setId] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [electric, setElectric] = useState(null);


  return (
    <View style={styles.whole}>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={malzeme}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Malzeme Grupları'
          searchPlaceholder="Search..."
          value={goods}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setGoods(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Elektrik Satın Alımı"
          value={electric}
          onChangeText={(text) => setElectric(text)}
          
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Malzeme Grubu için NAICS Kodu"
          value={id}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Malzeme Miktarı"
          value={id}
          onChangeText={(text) => setId(text)}
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
          placeholder='Malzeme Miktar Birimi'
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
        <TextInput
          style={styles.dropdown}
          placeholder="Satın Alma Bedeli (USD)"
          value={id}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Faaliyet Verisi Değeri"
          value={id}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={() => alert('Bilgileriniz Kaydedildi!')}/>
      </View>
    </View>
  );
};

export default CategoryK;

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