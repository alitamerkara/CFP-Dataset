import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';

const malzeme = [
  { label: 'Mutfak Ekipmanları', value: '1' },
  { label: 'Ofis Ekipmanları', value: '2' },
  { label: 'İş Saha Ekipmanları', value: '3' },
  { label: 'Bina ve Yapılar', value: '4' },
];
const birim = [
  { label: 'Ton', value: '1' },
  { label: 'Lt', value: '2' },
  { label: 'Sm3', value: '3' },
  { label: 'M3', value: '4' }, 
  { label: 'kWh', value: '5' }, 
];


const CategoryL = () => {
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
          placeholder='Duran Varlık Türü'
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
          placeholder="Duran Varlık"
          value={electric}
          onChangeText={(text) => setElectric(text)}
        />
      </View>
      <View style={styles.field}>
        <Text>Faaliyet Verisi</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Birim"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      </View>
      <View style={styles.field}>
        <Text>Emisyon Faktörleri (CO2e)</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Birim"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Emisyon Miktarları (ton CO2e)"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={() => alert('Bilgileriniz Kaydedildi!')}/>
      </View>
    </View>
  );
};

export default CategoryL;

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