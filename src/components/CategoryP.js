import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';
import { ScrollView } from 'react-native-gesture-handler';

const birim = [
  { label: 'Ton', value: '1' },
  { label: 'Kg', value: '2' },
  { label: 'M3', value: '3' },
];

const CategoryO = () => {
 const [equipment , setEquipment] = useState(null);
 const [value, setValue] = useState(null);
  const [unit, setUnit] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [secondUnit, setSecondUnit] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);
  const [thirdUnit, setThirdUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'>
      <Text style={styles.title}>Kiraya Verilen Ekipmanların Kullanımı Kaynaklı Emisyonlar</Text>
    <View style={styles.whole}>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Kiraya Verilen Ekipman"
          value={equipment}
          onChangeText={(text) => setEquipment(text)}
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
        />
      </View>
      </View>
      <View style={styles.field}>
        <Text>Emisyon Faktörü</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={secondValue}
          onChangeText={(text) => setSecondValue(text)}
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
          value={secondUnit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSecondUnit(item.label);
            setIsFocus(false);
          }}
        />
      </View>
      </View>
      <View style={styles.field}>
        <Text>Emisyon Miktarları (ton CO2e)</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={thirdValue}
          onChangeText={(text) => setThirdValue(text)}
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
          value={thirdUnit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setThirdUnit(item.label);
            setIsFocus(false);
          }}
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

export default CategoryO;

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