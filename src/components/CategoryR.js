import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';

const tip = [
  { label: 'Evsel Atık Su', value: 'Evsel Atık Su' },
  { label: 'Endüstriyel Atık Su', value: 'Endüstriyel Atık Su' },
  { label: 'Tıbbi Atık', value: 'Tıbbi Atık' },
  { label: 'Kağıt/Karton', value: 'Kağıt/Karton' },
  { label: 'Ahşap', value: 'Ahşap' },
  { label: 'Metal', value: 'Metal' },
  { label: 'Moloz', value: 'Moloz' },
  { label: 'Plastik', value: 'Plastik' },
  { label: 'Elektronik', value: 'Elektronik' },
  { label: 'Evsel Atık', value: 'Evsel Atık' },
  { label: 'Cam', value: 'Cam' },
  { label: 'Atık Pil', value: 'Atık Pil' },
  { label: 'Atık Yağ', value: 'Atık Yağ' }, 
  { label: 'Cam', value: 'Cam' },
];
const yöntem = [
  { label: 'Biyolojik Arıtma', value: 'Biyolojik Arıtma' },
  { label: 'Paket Arıtmak', value: 'Paket Arıtmak' },
  { label: 'Yakarak Bertaraf', value: 'Yakarak Bertaraf' },
  { label: 'Sterilizasyon', value: 'Sterilizasyon' }, 
  { label: 'Düzenli Depolama', value: 'Düzenli Depolama' },
  { label: 'Geri Dönüşüm', value: 'Geri Dönüşüm' },
];
const birim = [
  { label: 'Ton', value: 'Ton' },
  { label: 'Kg', value: 'Kg' },
  { label: 'M3', value: 'M3' },
];


const CategoryR = () => {
  const [wasteType, setWasteType] = useState(null);
  const [wasteMethod, setWasteMethod] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [activityUnit, setActivityUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleSave = async () => {
    if (wasteType && wasteMethod && activityValue && activityunit) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "CategoryM"), {
          wasteType,
          wasteMethod,
          activityValue,
          activityUnit,
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
          data={tip}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Atık Türü'
          searchPlaceholder="Search..."
          value={wasteType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setWasteType(item.value);
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
          value={wasteMethod}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setWasteMethod(item.value);
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
          value={activityUnit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setActivityUnit(item.label);
            setIsFocus(false);
          }}
          dropdownPosition='top'
        />
      </View>
      </View>
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={handleSave}/>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryR;

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