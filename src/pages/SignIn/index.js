import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useFonts, Damion_400Regular } from '@expo-google-fonts/damion';

export default function SignIn(){

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Damion_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.message}>Bem-vindo</Text>
            </View>

            <Image
                 style={styles.logo}
                 source={require('../../assets/logo.png')}
                 resizeMode= "center"
                 />

            <View styles={styles.containerForm}>
                <Text style={styles.input}>Email</Text>
                <TextInput
                placeholder="Digite um email" 
                style={styles.placeInput}
                />

                <Text style={styles.input}>Senha</Text>
                <TextInput
                placeholder="Digite uma senha" 
                style={styles.placeInput}
                secureTextEntry={true}
                />

                <Text style={styles.input}>Campus</Text>
                <TextInput
                placeholder="Escolha seu campus" 
                style={styles.placeInput}
                />

                <TouchableOpacity style="button">
                    <Text style={styles.buttonText}
                    onPress={ () => navigation.navigate('Home') }>
                        Entrar
                    </Text>
                </TouchableOpacity>   

                <TouchableOpacity>
                    <Text style={styles.buttonRegister}>
                        Não possui uma conta? Cadastre-se!
                    </Text>
                </TouchableOpacity>  

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFC500',
        alignItems: 'center',
    },
    containerTitle: {
        marginTop: '15%',
        alignItems: 'center',
        fontSize: 28,
    },
    message:{
        fontSize: 45,
        fontFamily: 'Damion_400Regular'
    },
    logo: {
        height: 180,
        width: 200,
        marginTop: 8,
        marginBottom: 5,
        borderRadius: 40,
    },
    login: {

    },
    containerForm:{ /* Nada por enqunato */
    

    },
    input: {
        fontSize: 25,
        paddingBottom: 5,
        paddingTop: 10,
        fontFamily: 'Damion_400Regular'
    },

    placeInput: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingLeft: 5,
        paddingBottom:2
    },

    buttonText: {
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 30,
        backgroundColor: '#d14f4f',
        alignSelf: 'center',
        fontFamily: 'Damion_400Regular'
    }

})