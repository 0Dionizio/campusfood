import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useFonts, Damion_400Regular } from '@expo-google-fonts/damion';

export default function Chat(){

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Damion_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={styles.container}>
            <Text style={styles.textContainer}>
                Em breve :D     
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFC500',
        alignItems: 'center',
        
    },

    textContainer:{
        fontFamily: 'Damion_400Regular',
        fontSize: 70,
        marginTop: '70%',
    }

})