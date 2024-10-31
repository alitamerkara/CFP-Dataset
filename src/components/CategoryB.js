import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView} from 'react-native';
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
  { label: 'Haziran', value: 'Haziran'},
  { label: 'Temmuz', value: 'Temmuz' },
  { label: 'Ağustos', value: 'Ağustos' },
  { label: 'Eylül', value: 'Eylül' },
  { label: 'Ekim', value: 'Ekim' },
  { label: 'Kasım', value: 'Kasım' },
  { label: 'Aralık', value: 'Aralık' },
];
const tip = [
  { label: 'R12', value: 'R12' },
  { label: 'R134A', value: 'R134A' },
  { label: 'R32', value: 'R32' },
  { label: 'R143A', value: 'R143A' }, 
  { label: 'R407C', value: 'R407C' },
  { label: 'FM200', value: 'FM200' },
  { label: 'CO2', value: 'CO2' },
  { label: 'R600A', value: 'R600A' },
  { label: 'R22', value: 'R22' },
  { label: 'R404A', value: 'R404A' },
  { label: 'R410A', value: 'R410A' },
];
const kaynak = [
  { label: 'Buzdolabı', value: 'Buzdolabı' },
  { label: 'Klima', value: 'Klima' },
  { label: 'Chiller', value: 'Chiller' },
  { label: 'VRF(Variable Refrigerant Flow)', value: 'VRF(Variable Refrigerant Flow)' }, 
  { label: 'Yangın Baskılama Sistemi', value: 'Yangın Baskılama Sistemi' }, 
  { label: 'Gazlı Akım Kesici (Alçak Gerilim)', value: 'Gazlı Akım Kesici (Alçak Gerilim)' }, 
  { label: 'Gazlı Akım Kesici (Yüksek Gerilim) ', value: 'Gazlı Akım Kesici (Yüksek Gerilim)' }, 
  { label: 'Gazlı Akım Ayırıcı (Alçak Gerilim)', value: 'Gazlı Akım Ayırıcı (Alçak Gerilim)' }, 
  { label: 'Gazlı Akım Ayırıcı (Yüksek Gerilim)', value: 'Gazlı Akım Ayırıcı (Yüksek Gerilim)' },
  { label: 'Su Sebili', value: 'Su Sebili' },
];
const birim = [
  { label: 'Ton', value: 'Ton' },
  { label: 'Kg', value: 'Kg' },
];


const CategoryB = () => {
  const [month, setMonth] = useState(null);
  const [source, setSource] = useState(null);
  const [equipmentId, setEquipmentId] = useState(null);
  const [gasType, setGasType] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [charge, setCharge] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleSave = async () => {
    if (month && source && equipmentId && gasType && capacity && charge && unit) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "CategoryB"), {
          month,
          source,
          equipmentId,
          gasType,
          capacity,
          charge,
          unit,
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
  keyboardShouldPersistTaps='handled'
>
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
          value={equipmentId}
          onChangeText={(text) => setEquipmentId(text)}
          type="number"
          keyboardType='numeric'
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
          value={gasType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setGasType(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Kapasite"
          value={capacity}
          onChangeText={(text) => setCapacity(text)}
          type="number"
          keyboardType='numeric'
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Şarj / Dolum Miktarı"
          value={charge}
          onChangeText={(text) => setCharge(text)}
          type="number"
          keyboardType='numeric'
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
        <PrimaryButton children={"Kaydet"} onPress={handleSave}/>
      </View>
    </View>
    </ScrollView>
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