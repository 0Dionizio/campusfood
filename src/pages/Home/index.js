import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'


export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.navbarContainer}>
            <Icon style={styles.iconSearch} name="search1" size={28}/>
                <View style={styles.search}>
                    <TextInput placeholder='Buscar' 
                    style={styles.textSearch}>
                        </TextInput>
                </View>
            </View>

            <ScrollView>
            <View style={styles.menuContainer}>
                <TouchableOpacity>
              <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/cafe.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Café
                </Text>
                <Text style={styles.menuText}>Delicioso café com leite s/ açucar</Text>
            </View>
            </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/pizza.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Pizza
                </Text>
                <Text style={styles.menuText}>Tradicional pizza italiana com massa fina e bem recheada sabor bauru</Text>
            </View>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/panquecas.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Panqueca
                </Text>
                <Text style={styles.menuText}>As melhores panquecas com os melhores preços</Text>
            </View>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/sorvetegranulado.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Sorvetes 
                </Text>
                <Text style={styles.menuText}>Sorvetes de diversos sabores</Text>
            </View>
        </View>

        

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/tortamorango.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Tortas de morango
                </Text>
                <Text style={styles.menuText}>As melhores panquecas com os melhores preços</Text>
            </View>
        </View>
        
        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/cafe.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Café
                </Text>
                <Text style={styles.menuText}>Delicioso café com leite s/ açucar</Text>
            </View>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/pizza.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Pizza
                </Text>
                <Text style={styles.menuText}>Tradicional pizza italiana com massa fina e bem recheada sabor bauru</Text>
            </View>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/panquecas.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Panqueca
                </Text>
                <Text style={styles.menuText}>As melhores panquecas com os melhores preços</Text>
            </View>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/sorvetegranulado.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Sorvetes 
                </Text>
                <Text style={styles.menuText}>Sorvetes de diversos sabores</Text>
            </View>
        </View>

        

        <View style={styles.menuContainer}>
            <View style={styles.menu1}>
            <Image 
                 source={require('../../assets/tortamorango.jpg')}
                 style={{ width: '30%', height: '70%' , borderRadius:15, marginTop: 20, marginLeft: 15 }}
                 resizeMode= "contain"
                 />
                 <Text style={styles.menuTitle}>
                Torta de morango
                </Text>
                <Text style={styles.menuText}>As melhores panquecas com os melhores preços</Text>
            </View>
        </View>
        
            </ScrollView>

        <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.notesIcon}
                onPress={ () => navigation.navigate('Notes') }>
                <Icon style={styles.notesIcon} name="barcode" size={40}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentIcon}
                onPress={ () => navigation.navigate('Payment') }>
                <Icon style={styles.paymentIcon} name="wallet" size={40}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chatIcon}
                onPress={ () => navigation.navigate('Chat') }>
                <Icon style={styles.chatIcon} name="wechat" size={40}/>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.profileIcon}
                onPress={ () => navigation.navigate('Profile') }>
                <Icon style={styles.profileIcon} name="user" size={40}/>
                </TouchableOpacity>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    navbarContainer:{
        backgroundColor: '#FFC500',
        width: '100%',
        height: 60,
    },
    search:{
        backgroundColor:'#FFF',
        height: 40,
        borderRadius: 30,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 50,
    },
    menuContainer:{
        alignSelf: 'flex-start'
    },

    menu1:{
        backgroundColor: '#FFF',
        width: 400,
        height: 150,
    },

    textSearch:{
        paddingTop: 6,
        paddingLeft: 15,
        alignContent: 'flex-start',
    },
    iconSearch:{
        position: 'absolute',
        right: 15,
        marginTop: 11,
    },
    bottomTab:{
        height: '100%',
        width: '100%',
        backgroundColor:'#FFC500',
        top: 740,
        position: 'absolute'
    },
    notesIcon:{
        marginTop:'1%',
        marginLeft: '2%',
    },

    paymentIcon:{
        position: 'absolute',
        marginTop: '2.3%',
        marginLeft: '25%'
    },

    chatIcon:{
        position: 'absolute',
        marginTop: '2.4%',
        marginLeft: '45%'
    },

    profileIcon:{
        position: 'absolute',
        marginTop: '2.5%',
        marginLeft: '65%'
    },
    menuTitle:{
        paddingTop: 12,
        fontSize: 28,
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: 150,
    },
    
    menuText:{
        marginLeft: 150,
        position: 'absolute',
        paddingTop: 50,
        fontSize: 17,
    }

})