import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';

const tip = [
  { label: 'Evsel Atık Su', value: '1' },
  { label: 'Endüstriyel Atık Su', value: '2' },
  { label: 'Tıbbi Atık', value: '3' },
  { label: 'Kağıt/Karton', value: '4' },
  { label: 'Ahşap', value: '5' },
  { label: 'Metal', value: '6' },
  { label: 'Moloz', value: '7' },
  { label: 'Plastik', value: '8' },
  { label: 'Elektironik', value: '9' },
  { label: 'Evsel Atık', value: '10' },
  { label: 'Cam', value: '11' },
  { label: 'Atık Pil', value: '12' },
  { label: 'Atık Yağ', value: '13' }, 
  { label: 'Cam', value: '14' },
];
const yöntem = [
  { label: 'Biyolojik Arıtma', value: '1' },
  { label: 'Paket Arıtmak', value: '2' },
  { label: 'Yakarak Bertaraf', value: '3' },
  { label: 'Sterilizasyon', value: '4' }, 
  { label: 'Düzenli Depolama', value: '5' },
  { label: 'Geri Dönüşüm', value: '6' },
];
const birim = [
  { label: 'Ton', value: '1' },
  { label: 'Kg', value: '2' },
  { label: 'M3', value: '3' },
];


const CategoryM = () => {
  const [type, setType] = useState(null);
  const [method, setMethod] = useState(null);
  const [value, setValue] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'>
    <View style={styles.whole}>
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
          placeholder='Atık Türü'
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
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={yöntem}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Atık Bertaraf Yöntemi'
          searchPlaceholder="Search..."
          value={method}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setMethod(item.value);
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
          value={value}
          onChangeText={(text) => setValue(text)}
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
        <PrimaryButton children={"Kaydet"} onPress={() => alert('Bilgileriniz Kaydedildi!!')}/>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryM;

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