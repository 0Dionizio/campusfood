import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts, Damion_400Regular } from '@expo-google-fonts/damion';
import { useNavigation } from '@react-navigation/native'



export default function Welcome(){
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Damion_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (

        
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                 <Image 
                 source={require('../../assets/logo.png')}
                 style={{ width: '100%', borderRadius:140, marginBottom: 20, marginTop: 20 }}
                 resizeMode= "contain"
                 />

                <View style={styles.containerForm}>
                    <Text style={{ fontFamily: 'Damion_400Regular', fontSize: 50}}>Bem vindo</Text>
                    <Text style={styles.text}>Faça o login para continuar </Text>

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('SignIn') }>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

        container:{
        flex:2,
        backgroundColor: '#FFC500',
    },
    containerLogo:{
        borderRadius: 10,
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#d14f4f',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 12,
    },
    text: {
        fontSize: 25,
        marginTop: 10,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#FFC500',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Damion_400Regular',
        fontSize: 43,
        color: '#000000',
    }
})