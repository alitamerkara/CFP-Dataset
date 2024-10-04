
import { View, Text, StyleSheet } from 'react-native';

const CategoryA = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Category A</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default CategoryA;