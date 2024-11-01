import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const SecondButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>  {children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 10,
    },
});

export default SecondButton;