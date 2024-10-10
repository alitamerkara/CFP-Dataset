import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
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
const tip = [
    { label: 'Isıtma', value: '1' },
    { label: 'Soğutma', value: '2' },
    { label: 'İklimlendirme', value: '3' },
    { label: 'Kızgın Su', value: '4' }, 
    { label: 'Buhar', value: '5' }, 
    { label: 'Basınçlı Hava', value: '6' },  
  ];
const enerji = [
  { label: 'Doğal Gaz', value: '1' },
  { label: 'Dizel', value: '2' },
  { label: 'LPG', value: '3' },
  { label: 'Asetilen', value: '4' }, 
  { label: 'Benzin', value: '5' }, 
  { label: 'LNG', value: '6' }, 
  { label: 'CNG', value: '7' },
  { label: 'Elektrik', value: '8' }, 
];
const birim = [
  { label: 'kWh', value: '1' },
  { label: 'Ton', value: '2' },
  { label: 'm3', value: '3' }, 
];
const sertifika = [
    { label: 'Evet', value: '1' },
    { label: 'Hayır', value: '2' },
  ];


const CategoryE = () => {
  const [country, setCountry] = useState(null);
  const [month, setMonth] = useState(null);
  const [type, setType] = useState(null);
  const [energy, setEnergy] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [emission, setEmission] = useState(null);
  const [specification, setSpecification] = useState(null);
  const [certificateCheck, setCertificateCheck] = useState(null);
  const [document, setDocument] = useState(null);
  const [year, setYear] = useState(null);
  const [cost, setCost] = useState(null);
  const [consumption, setConsumption] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'>
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
          data={tip}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Nihai Enerjinin Türü'
          searchPlaceholder="Search..."
          value={type}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setType(item.label);
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
          data={enerji}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Nihai Enerjinin Temin Edildiği Birincil Kaynak'
          searchPlaceholder="Search..."
          value={energy}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setEnergy(item.label);
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
          placeholder=" Konum Temelli Toplam Elektrik Tüketimi"
          value={consumption}
          onChangeText={(text) => setConsumption(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      {certificate=="Evet"? (<View style={styles.field}>
        <Text>I-REC Sertifika Bilgileri</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Emisyon Faktörü?"
          value={emission}
          onChangeText={(text) => setEmission(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          value={"tCO2-eşd./MWh"}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Üreticinin Özellikleri"
          value={specification}
          onChangeText={(text) => setSpecification(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Sertifikalandırılmış mı?"
          value={certificateCheck}
          onChangeText={(text) => setCertificateCheck(text)}
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="İtfa belgesi tanımlama belge numarası?"
          value={document}
          onChangeText={(text) => setDocument(text)}
          type="number"
          keyboardType="numeric"
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Sertifikaya konu elektriğin üretim yılı?"
          value={year}
          onChangeText={(text) => setYear(text)}
          type="number"
          keyboardType="numeric"
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Bütçesi/Ödenen tutar?"
          value={cost}
          onChangeText={(text) => setCost(text)}
          type="number"
          keyboardType="numeric"
        />
        </View>  
      </View>): null}
      
      
      <View style={styles.container}>
       <PrimaryButton children={"Kaydet"} onPress={() => alert('Bilgileriniz Kaydedildi!')}/>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryE;

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
      borderRadius:8
    },
  });