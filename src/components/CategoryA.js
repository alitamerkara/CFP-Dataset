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
const sektor = [
  { label: 'Demir-Çelik', value: '1' },
  { label: 'Alüminyum', value: '2' },
  { label: 'Çimento', value: '3' },
  { label: 'Gübre', value: '4' }, 
  { label: 'Elektrik ve Hidrojen', value: '5' },
  { label: 'Diğer', value: '6' },
];
const yakıt = [
  { label: 'Doğal Gaz', value: '1' },
  { label: 'Dizel', value: '2' },
  { label: 'LPG', value: '3' },
  { label: 'Asetilen', value: '4' }, 
  { label: 'Benzin', value: '5' }, 
  { label: 'LNG', value: '6' }, 
  { label: 'CNG', value: '7' }, 
];
const kaynak = [
  { label: 'Jeneratör', value: '1' },
  { label: 'Kazan', value: '2' },
  { label: 'Fırın', value: '3' },
  { label: 'Kompresör', value: '4' }, 
  { label: 'Seyyar Jeneratör', value: '5' }, 
  { label: 'Pompa', value: '6' }, 
  { label: 'Kojenerasyon ', value: '7' }, 
  { label: 'Trijinerasyon ', value: '8' }, 
];
const birim = [
  { label: 'Ton', value: '1' },
  { label: 'Lt', value: '2' },
  { label: 'Sm3', value: '3' },
  { label: 'M3', value: '4' }, 
  { label: 'kWh', value: '5' }, 
];


const CategoryA = () => {
  const [month, setMonth] = useState(null);
  const [sector, setSector] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [source, setSource] = useState(null);
  const [id, setId] = useState(null);
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
          data={sektor}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Sektör Seçin'
          searchPlaceholder="Search..."
          value={sector}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSector(item.value);
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
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Ekipman ID"
          value={id}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Miktar"
          value={amount}
          onChangeText={(text) => setAmount(text)}
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
        <PrimaryButton children={"Kaydet"} onPress={() => alert('Saved!')}/>
      </View>
    </View>
  );
};

export default CategoryA;

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    padding: 8,
    // backgroundColor: 'white',
    overflow: 'hidden',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
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