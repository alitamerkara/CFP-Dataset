import React, { act, useState } from 'react';
import { StyleSheet, TextInput, View,ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';

const malzeme = [
  { label: 'Elektrik', value: 'Elektrik' },
  { label: 'Kırtasiye', value: 'Kırtasiye' },
  { label: 'Donanım', value: 'Donanım' },
  { label: 'Yazılım', value: 'Yazılım' },
  { label: 'Bilgi İşlem Sarf', value: 'Bilgi İşlem Sarf' },
];
const birim = [
  { label: 'Ton', value: 'Ton' },
  { label: 'Lt', value: 'Lt' },
  { label: 'Sm3', value: 'Sm3' },
  { label: 'M3', value: 'M3' }, 
  { label: 'kWh', value: 'kWh' }, 
];


const CategoryK = () => {
  const [goods, setGoods] = useState(null);
  const [electric, setElectric] = useState(null);
  const [naicsId, setNaicsId] = useState(null);
  const [goodsAmount, setGoodsAmount] = useState(null);
  const [goodsUnit, setGoodsUnit] = useState(null);
  const [costUSD, setCostUSD] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleSave = async () => {
    if (goods && electric && naicsId && goodsAmount && goodsUnit && costUSD && activityValue) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "İş Seyahatleri"), {
          goods,
          electric,
          naicsId,
          goodsAmount,
          goodsUnit,
          costUSD,
          activityValue,
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
          style={styles.dropdown} 
          placeholder="Malzeme Grubu için NAICS Kodu"
          value={naicsId}
          onChangeText={(text) => setNaicsId(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Malzeme Miktarı"
          value={goodsAmount}
          onChangeText={(text) => setGoodsAmount(text)}
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
          placeholder='Malzeme Miktar Birimi'
          searchPlaceholder="Search..."
          value={goodsUnit}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setGoodsUnit(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Satın Alma Bedeli (USD)"
          value={costUSD}
          onChangeText={(text) => setCostUSD(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Faaliyet Verisi Değeri"
          value={activityValue}
          onChangeText={(text) => setActivityValue(text)}
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