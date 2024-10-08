import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { ScrollView } from 'react-native-gesture-handler';


const CategoryS = () => {
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);


  return (
    <ScrollView>
      <Text style={styles.title}>Yatırımlar Kaynaklı Emisyonlar</Text>
    <View style={styles.whole}>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Yatırım"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          type="number"
        />
      </View>
      <View style={styles.field}>
        <Text>Faaliyet Verisi</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View> 
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Birim"
          value={unit}
          onChangeText={(text) => setUnit(text)}
          type="number"
        />
      </View> 
      </View>
      <View style={styles.field}>
        <Text>Emisyon Faktörü</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View> 
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Birim"
          value={unit}
          onChangeText={(text) => setUnit(text)}
          type="number"
        />
      </View> 
      </View>
      <View style={styles.field}>
        <Text>Emisyon Miktarları (ton CO2e)</Text>
        <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Değer"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          type="number"
          keyboardType="numeric"
        />
      </View> 
      <View style={styles.container}>
        <TextInput
          style={styles.dropdown}
          placeholder="Birim"
          value={unit}
          onChangeText={(text) => setUnit(text)}
          type="number"
        />
      </View> 
      </View>
      <View style={styles.container}>
        <PrimaryButton children={"Kaydet"} onPress={() => alert('Bilgileriniz Kaydedildi!!')}/>
      </View>
    </View>
    </ScrollView>
  );
};

export default CategoryS;

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