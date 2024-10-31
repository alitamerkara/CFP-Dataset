import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';

const malzeme = [
  { label: 'Mutfak Ekipmanları', value: 'Mutfak Ekipmanları' },
  { label: 'Ofis Ekipmanları', value: 'Ofis Ekipmanları' },
  { label: 'İş Saha Ekipmanları', value: 'İş Saha Ekipmanları' },
  { label: 'Bina ve Yapılar', value: 'Bina ve Yapılar' },
];
const birim = [
  { label: 'Ton', value: 'Ton' },
  { label: 'Lt', value: 'Lt' },
  { label: 'Sm3', value: 'Sm3' },
  { label: 'M3', value: 'M3' }, 
  { label: 'kWh', value: 'kWh' }, 
];


const CategoryL = () => {
  const [objectType, setObjectType] = useState(null);
  const [object, setObject] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [activityUnit, setActivityUnit] = useState(null);
  const [emissionValue, setEmissionValue] = useState(null);
  const [emissionUnit, setEmissionUnit] = useState(null);
  const [emissionAmount, setEmissionAmount] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleSave = async () => {
    if (objectType && object && activityValue && activityUnit && emissionValue && emissionUnit && emissionAmount) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "CategoryL"), {
          objectType,
          object,
          activityValue,
          activityUnit,
          emissionValue,
          emissionUnit,
          emissionAmount,
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
          value={objectType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setObjectType(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Duran Varlık"
          value={object}
          onChangeText={(text) => setObject(text)}
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
          value={activityUnit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setActivityUnit(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      </View>
      <View style={styles.field}>
        <Text>Emisyon Faktörleri (CO2e)</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={emissionValue}
          onChangeText={(text) => setEmissionValue(text)}
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
          value={emissionUnit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setEmissionUnit(item.value);
            setIsFocus(false);
          }}
          dropdownPosition='top'
        />
      </View>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Emisyon Miktarları (ton CO2e)"
          value={emissionAmount}
          onChangeText={(text) => setEmissionAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={handleSave}/>
      </View>
    </View>
    </ScrollView>
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