import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from '../components/PrimaryButton';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const birim = [
  { label: 'Ton', value: 'Ton' },
  { label: 'Kg', value: 'Kg' },
  { label: 'M3', value: 'M3' },
];

const CategoryO = () => {
  const [product, setProduct] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [activityUnit, setActivityUnit] = useState(null);
  const [emissionValue, setEmissionValue] = useState(null);
  const [emissionUnit, setEmissionUnit] = useState(null);
  const [emissionAmountValue, setEmissionAmountValue] = useState(null);
  const [emissionAmountUnit, setEmissionAmountUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();

  const handleSave = async () => {
    if (product && activityValue && activityUnit && emissionValue && emissionUnit && emissionAmountValue && emissionAmountUnit) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "Satışı Yapılan Ürünlerin Kullanımı Kaynaklı"), {
          product,
          activityValue,
          activityUnit,
          emissionValue,
          emissionUnit,
          emissionAmountValue,
          emissionAmountUnit,
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={styles.whole}>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Satış Yapılan Ürün"
          value={product}
          onChangeText={(text) => setProduct(text)}
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
            setActivityUnit(item.label);
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
            setEmissionUnit(item.label);
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
          value={emissionAmountValue}
          onChangeText={(text) => setEmissionAmountValue(text)}
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
          value={emissionAmountUnit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setEmissionAmountUnit(item.label);
            setIsFocus(false);
          }}
        />
      </View>
      </View>
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={handleSave}/>
      </View>
    </View>
      </ScrollView>
    </GestureHandlerRootView>
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
});