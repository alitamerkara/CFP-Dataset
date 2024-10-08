import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
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
const yakıt = [
  { label: 'Doğal Gaz', value: '1' },
  { label: 'Dizel', value: '2' },
  { label: 'LPG', value: '3' },
  { label: 'Asetilen', value: '4' }, 
  { label: 'Benzin', value: '5' }, 
  { label: 'LNG', value: '6' }, 
  { label: 'CNG', value: '7' }, 
];
const sertifika = [
  { label: 'Evet', value: '1' },
  { label: 'Hayır', value: '2' },
];
const birim = [
  { label: 'kWh', value: '1' },
  { label: 'MWh', value: '2' }, 
];


const CategoryA = () => {
  const [country, setCountry] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [source, setSource] = useState(null);
  const [id, setId] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
    <ScrollView>
    <View style={styles.whole}>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Ülke"
          value={country}
          onChangeText={(text) => setCountry(text)}
          type="text"
        />
      </View>
      <View style={styles.field}>
        <Text>Şebekeden Toplam Tüketim</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown} // Apply the dropdown style to the TextInput
          placeholder="Tüketim Miktarı"
          value={amount}
          onChangeText={(text) => setAmount(text)}
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
      </View>
      <View style={styles.field}>
        <Text>Yenilenebilir Enerji</Text>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={sertifika}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='I-REC Sertifikası Var mı?'
          searchPlaceholder="Search..."
          value={certificate}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCertificate(item.label);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Miktar"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
      </View>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Konum Temelli Toplam Elektrik Tüketimi"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
        />
      </View>
      {certificate=="Evet"? (<View style={styles.field}>
        <Text>I-REC Sertifika Bilgileri</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Emisyon Faktörü?"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          value={"tCO2-eşd./MWh"}
          // onChangeText={(text) => setAmount(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Üreticinin Özellikleri"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Sertifikalandırılmış mı?"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="İtfa belgesi tanımlama belge numarası?"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Sertifikaya konu elektriğin üretim yılı?"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Bütçesi/Ödenen tutar?"
          // value={amount}
          // onChangeText={(text) => setAmount(text)}
        />
        </View>  
      </View>): null}
      
      
      <View style={styles.container}>
       <PrimaryButton children={"Kaydet"}/>
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
    backgroundColor: '#edfcfc',
    overflow: 'hidden',
  },
  container: {
    backgroundColor: '#edfcfc',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    color:"green"
    
  },
  label: {
    position: 'absolute',
    // backgroundColor: 'white',
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
    color:"green"
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
    marginBottom: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
  },
  field: {
    borderWidth:2,
    borderColor:"#4ecf54",
    borderRadius:10,
    padding:10,
    margin:8,
   
  },
});