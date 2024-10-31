import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from './PrimaryButton';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";  
import { auth } from '../../firebase';


const sertifika = [
  { label: 'Evet', value: '1' },
  { label: 'Hayır', value: '2' },
];
const birim = [
  { label: 'kWh', value: '1' },
  { label: 'MWh', value: '2' }, 
];


const CategoryD = () => {
  const [country, setCountry] = useState(null);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [secondAmount, setSecondAmount] = useState(null);
  const [location, setLocation] = useState(null);
  const [emission, setEmission] = useState(null);
  const [specification, setSpecification] = useState(null);
  const [certificateCheck, setCertificateCheck] = useState(null);
  const [document, setDocument] = useState(null);
  const [year, setYear] = useState(null);
  const [cost, setCost] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleSave = async () => {
    if (country && amount && unit && certificate && secondAmount && location && emission && specification && certificateCheck && document && year && cost) {
      const userEmail = auth.currentUser.email;
      try {
        await addDoc(collection(db, "CategoryD"), {
          country,
          amount,
          unit,
          certificate,
          secondAmount,
          location,
          emission,
          specification,
          certificateCheck,
          document,
          year,
          cost,
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
          value={secondAmount}
          onChangeText={(text) => setSecondAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Konum Temelli Toplam Elektrik Tüketimi"
          value={location}
          onChangeText={(text) => setLocation(text)}
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
       <PrimaryButton children={"Kaydet"} onPress={handleSave}/>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryD;

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