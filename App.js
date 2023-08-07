import { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, FlastList, SafeAreaView, FlatList } from 'react-native'
import { Picker } from "react-native-picker/picker";

import NotaEditor from './src/components/NotaEditor';
import Notas from './src/components/Notas';
import { buscaNotas, criaTabela } from './src/components/Notas';


export default function App () {
  
  const [notas, setNotas] = useState([]);
  const [notaSel, setNotaSel] = useState({});
  const [categoria, setCategoria] = useState(`*`);

  useEffect( () => {
    criaTabela();
  }, []);

  useEffect( () => {
    async function inicNotas() {
      await mostraNotas();
    }

    inicNotas();

  }, [categoria]);

  async function mostraNotas(){
    const xxx = await buscaNotas(categoria);
    setNotas(xxx);
  }

  return(

    <SafeAreaView style={estilos.container}>

      <View style={estilos.modalPicker}>

        <Picker 
        selectedValue={categoria}
        onValueChange={(itemValue) => setCategoria(itemValue)}
        >

          <Picker.Item label = 'Notas' value = '*' />
          <Picker.Item label = 'Pessoal' value = 'Pessoal' />
          <Picker.Item label = 'Trabalho' value = 'Trabalho' />
          <Picker.Item label = 'Outros' value = 'Outros' />
          
        </Picker>

      </View>

      <FlatList data={notas} renderItem={ (nota) => (<Nota item = {nota.item} setNotaSel = {setNotaSel} />)} keyExtractor={(nota) => nota.id} />

      <NotaEditor showNotas = { mostraNotas } notaSel = { notaSel } setNotaSel = { setNotaSel } />

    </SafeAreaView>

  );

}

const estilos = StyleSheet.create({

  container: {
    flex: 1, 
    alignItems: 'stretch',
    justifyContent: 'flex-start',

  },

  modalPicker: {

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    margin: 10,

  }

});