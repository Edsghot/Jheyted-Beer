import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button, StatusBar } from 'react-native';
import { BlurView } from 'expo-blur';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const uri= 'https://i.pinimg.com/564x/b3/7a/cb/b37acb2d24cbf66c1a8fa7fb63c70d4e.jpg'
const profilePicture = 'https://i.pinimg.com/564x/80/b4/eb/80b4eb114076e7cd344c357b14cdf91d.jpg'


export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={[styles.image, StyleSheet.absoluteFill]}/>
      <View style={{width:100, height:70, backgroundColor: 'purple', top:85, position:'absolute'}}></View>
      <View style={{width:100, height:70, backgroundColor: 'purple', position:'absolute', bottom:85}}></View>
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: '100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BlurView intensity={50}>
          
          <View style={styles.login}>
            <Image source={{ uri: profilePicture}} style={styles.profilePicture}/>
            <Text style={{fontSize:35, color:'#fff', fontWeight:700, padding:10, letterSpacing:2}} >XGOO</Text>
            <View>
              <Text style={{fontSize:17, color:'#fff',letterSpacing:1}}>Correo</Text>
              <TextInput style={styles.input} placeholder="xgoo@gmail.com"/>
            </View>
            <View>
              <Text style={{fontSize:17, color:'#fff',letterSpacing:1}}>Contraseña</Text>
              <TextInput style={styles.input} placeholder="contraseña" secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{fontSize:18, color:'#fff',letterSpacing:2, fontWeight:700}}>ENTRAR</Text>
            </TouchableOpacity>
            <View style={{padding:25}}>
              <Text style={{color:'#ffffff80'}}>Crear tu Cuenta Aqui</Text>
            </View>

          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },
  login:{
    width: 320,
    height: 550,
    borderColor: '#ffffff30',
    borderRadius:10,
    borderWidth: 1,
    padding: 10,
    alignItems:'center',
  },
  profilePicture:{
    width: 100,
    height:100,
    borderRadius:50,
    borderColor: '#fff',
    borderWidth:1,
    margin:15
  },
  input:{
    width:250,
    height:50,
    backgroundColor:'#ffffff60',
    padding:10,
    borderRadius:10,
    color: '#fff',
    marginVertical:5,
    marginBottom:20
  },
  button:{
    width:250,
    height:50,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'purple',
    borderRadius: 10,
    marginTop:10
  }
});


