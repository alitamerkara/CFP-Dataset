import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';

const ay = [
  { label: 'Ocak', value: 'Ocak' },
  { label: 'Şubat', value: 'Şubat' },
  { label: 'Mart', value: 'Mart' },
  { label: 'Nisan', value: 'Nisan' },
  { label: 'Mayıs', value: 'Mayıs' },
  { label: 'Haziran', value: 'Haziran' },
  { label: 'Temmuz', value: 'Temmuz' },
  { label: 'Ağustos', value: 'Ağustos' },
  { label: 'Eylül', value: 'Eylül' },
  { label: 'Ekim', value: 'Ekim' },
  { label: 'Kasım', value: 'Kasım' },
  { label: 'Aralık', value: 'Aralık' }, 
];

const sektor = [
  { label: 'Demir-Çelik', value: 'Demir-Çelik' },
  { label: 'Alüminyum', value: 'Alüminyum' },
  { label: 'Çimento', value: 'Çimento' },
  { label: 'Gübre', value: 'Gübre' }, 
  { label: 'Elektrik ve Hidrojen', value: 'Elektrik ve Hidrojen' },
  { label: 'Diğer', value: 'Diğer' },
];

const yakıt = [
  { label: 'Doğal Gaz', value: 'Doğal Gaz' },
  { label: 'Dizel', value: 'Dizel' },
  { label: 'LPG', value: 'LPG' },
  { label: 'Asetilen', value: 'Asetilen' }, 
  { label: 'Benzin', value: 'Benzin' }, 
  { label: 'LNG', value: 'LNG' }, 
  { label: 'CNG', value: 'CNG' }, 
];

const kaynak = [
  { label: 'Jeneratör', value: 'Jeneratör' },
  { label: 'Kazan', value: 'Kazan' },
  { label: 'Fırın', value: 'Fırın' },
  { label: 'Kompresör', value: 'Kompresör' }, 
  { label: 'Seyyar Jeneratör', value: 'Seyyar Jeneratör' }, 
  { label: 'Pompa', value: 'Pompa' }, 
  { label: 'Kojenerasyon', value: 'Kojenerasyon' }, 
  { label: 'Trijinerasyon', value: 'Trijinerasyon' }, 
];

const birim = [
  { label: 'Ton', value: 'Ton' },
  { label: 'Lt', value: 'Lt' },
  { label: 'Sm3', value: 'Sm3' },
  { label: 'M3', value: 'M3' }, 
  { label: 'kWh', value: 'kWh' }, 
];



const CategoryA = () => {
  const [month, setMonth] = useState(null);
  const [sector, setSector] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [source, setSource] = useState(null);
  const [equipmentId, setEquipmentId] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleSave = async () => {
    if (month && sector && fuel && source && equipmentId && amount && unit) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "CategoryA"), {
          month,
          sector,
          fuel,
          source,
          equipmentId,
          amount,
          unit,
          userEmail, 
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
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
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
              setMonth(item.label);
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
              console.log(item.label)
              setSector(item.label);
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
              setFuel(item.label);
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
              setSource(item.label);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.dropdown}
            placeholder="Ekipman ID"
            value={equipmentId}
            onChangeText={(text) => setEquipmentId(text)}
            type="number"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.dropdown}
            placeholder="Miktar"
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
          <PrimaryButton children={"Kaydet"} onPress={handleSave} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryA;

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
    borderRadius: 8,
    marginBottom: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
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
});
