import React from "react";
import { Image, StyleSheet, Text, View} from 'react-native';


import Centro from './assets/imagens/centro.jpg';
import Rosto from './assets/imagens/rosto.jpg';

export default function App(){
return(

  <View style={ estilos.container}>
    <Image style={estilos.central} source={Centro}/>
    <Image style={estilos.img} source={Rosto}/>
    <Text style={estilos.barraTitulo}>Hérique Oliveira</Text>
    <Text style={estilos.margem}>Estudante de Analise e Desenvolvimento de Sistemas em constante evolução e aprendizado. Ultimamente apaixonado com javascript e react native.</Text>

  </View>

);


}

const estilos = StyleSheet.create({

container: {
flex: 1,
backgroundColor: 'white',
alignItems:'center',
justifyContent: 'center',
},

img: {
width: 200,
height: 300,
marginTop: 20,
marginBottom: 30,
borderRadius: 75

},


central: {
  flex: 1,
  width: 700,
  height: 400,
  marginTop: 20,
  marginBottom: 30,
  justifyContent: 'space-around'

},
margem: {
marginTop: 20,
marginBottom: 30,
fontSize: 20,
padding: 10,
textAlign: 'justify'


},
barraTitulo: {
fontSize: 42,
alignItems: 'center',
justifyContent: 'center'

}

});