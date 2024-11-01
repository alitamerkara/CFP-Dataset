import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from '../components/PrimaryButton';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';


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
    { label: 'Isıtma', value: 'Isıtma' },
    { label: 'Soğutma', value: 'Soğutma' },
    { label: 'İklimlendirme', value: 'İklimlendirme' },
    { label: 'Kızgın Su', value: 'Kızgın Su' }, 
    { label: 'Buhar', value: 'Buhar' }, 
    { label: 'Basınçlı Hava', value: 'Basınçlı Hava' },  
  ];
const enerji = [
  { label: 'Doğal Gaz', value: 'Doğal Gaz' },
  { label: 'Dizel', value: 'Dizel' },
  { label: 'LPG', value: 'LPG' },
  { label: 'Asetilen', value: 'Asetilen' }, 
  { label: 'Benzin', value: 'Benzin' }, 
  { label: 'LNG', value: 'LNG' }, 
  { label: 'CNG', value: 'CNG' },
  { label: 'Elektrik', value: 'Elektrik' }, 
];
const birim = [
  { label: 'kWh', value: 'kWh' },
  { label: 'Ton', value: 'Ton' },
  { label: 'm3', value: 'm3' }, 
];
const sertifika = [
    { label: 'Evet', value: 'Evet' },
    { label: 'Hayır', value: 'Hayır' },
  ];


const CategoryE = () => {
  const [country, setCountry] = useState(null);
  const [month, setMonth] = useState(null);
  const [energyType, setEnergyType] = useState(null);
  const [energySource, setEnergySource] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [locationElectricity, setLocationElectricity] = useState(null);
  const [emissionFactor, setEmissionFactor] = useState(null);
  const [manufacturerSpecification, setManufacturerSpecification] = useState(null);
  const [certificateCheck, setCertificateCheck] = useState(null);
  const [documentNumber, setDocumentNumber] = useState(null);
  const [certificateYear, setCertificateYear] = useState(null);
  const [cost, setCost] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
  const handleSave = async () => {
    if (country && month && energyType && energySource && amount && unit && certificate && locationElectricity) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "Isıtma ve Soğutmada Kullanılan Yakıt Türleri"), {
          country,
          month,
          energyType,
          energySource,
          amount,
          unit,
          certificate,
          locationElectricity,
          emissionFactor,
          manufacturerSpecification,
          certificateCheck,
          documentNumber,
          certificateYear,
          cost,
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
          value={energyType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setEnergyType(item.label);
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
          value={energySource}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setEnergySource(item.label);
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
          value={locationElectricity}
          onChangeText={(text) => setLocationElectricity(text)}
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
          value={emissionFactor}
          onChangeText={(text) => setEmissionFactor(text)}
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
          value={manufacturerSpecification}
          onChangeText={(text) => setManufacturerSpecification(text)}
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
          value={documentNumber}
          onChangeText={(text) => setDocumentNumber(text)}
          type="number"
          keyboardType="numeric"
        />
        </View>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Sertifikaya konu elektriğin üretim yılı?"
          value={certificateYear}
          onChangeText={(text) => setCertificateYear(text)}
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
       <PrimaryButton children={"Kaydet"} onPress={handleSave}/>
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