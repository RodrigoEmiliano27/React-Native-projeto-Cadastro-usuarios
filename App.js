import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, 
  TouchableOpacity, Keyboard,Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from "./styles";



export default function App() {

  {/*  useState renderiza a tela mediante alteração na variavel */}

  {/*  icones podem ser encontrados aqui: https://icons.expo.fyi/Index */}
  
  const [codigo,setCodigo] = useState("")
  const [nome,setNome] = useState("")
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const [confirmarSenha,setConfirmarSenha] = useState("")

  useEffect(() => {
     console.log('useeffect processado!');
     carregaDados();
   }, [])
  
   function createUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(0, 2);
  }
   async function carregaDados() {
    try {
      const jsonValue = await AsyncStorage.getItem('@contatos')
      if (jsonValue != null) {
        const obj = JSON.parse(jsonValue);
        setCodigo(obj.id)
        setNome(obj.nome)
        setEmail(obj.email)
        setSenha(obj.senha)
        setConfirmarSenha(obj.senha)
        console.log(obj)
      }
      else {
        setCodigo("")
        setNome("")
        setEmail("")
        setSenha("")
        setConfirmarSenha("");
      }

    } catch (e) {
      Alert.alert(e.toString());
    }
  }
  async function salvaDados() {

    if(Number.parseInt(codigo)<=0)
    {
      Alert.alert("O codigo tem que ser maior que zero!!")
      return;
    }

    if(nome==="")
    {
      Alert.alert("o nome não pode ser vazio!")
      return;
    }
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if(!email.match(pattern))
    {
      Alert.alert("email invalido")
      return;
    }

    if(!(senha===confirmarSenha))
    {
      Alert.alert("Senhas não são iguais!")
      return;
    }



    console.log("1")
    let novoRegistro = !codigo;
    console.log("2")
    let obj = {
      id: codigo,
      nome: nome,
      email: email,
      senha: senha
    };
    console.log("3")
    try {

    
      const jsonValue = JSON.stringify(obj);
      await AsyncStorage.setItem('@contatos', jsonValue);
      Keyboard.dismiss();
      //Alert.alert('Dados salvos com sucesso!!!');
      limparCampos();
      console.log("5")

    } catch (e) {
      Alert.alert(e.toString());
    }
  }
  function editar(identificador) {
    const contato = contatos.find(contato => contato.id == identificador);

    if (contato) {
      setCodigo(contato.id);
      setNome(contato.nome);
      setEmail(contato.email);
      setSenha(contato.senha)
      setConfirmarSenha(contato.confirmarSenha)
    }

    console.log(contato);
  }


  async function limparCampos() {
    setCodigo("");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("")
    Keyboard.dismiss();
  }


  async function efetivaExclusaoTodosRegistros() {
    try {
      await AsyncStorage.removeItem('@contatos');
      Alert.alert('Registros removidos!');
      await carregaDados();
    }
    catch (e) {
      Alert.alert(e.toString());
    }
  }

  function apagarTudo() {
    if (Alert.alert('Muita atenção!!!', 'Confirma a exclusão de todos os contatos?',
      [
        {
          text: 'Sim, confirmo!',
          onPress: () => {
            efetivaExclusaoTodosRegistros();
          }
        },
        {
          text: 'Não!!!',
          style: 'cancel'
        }
      ]));
  }


  function removerElemento(identificador) {
    Alert.alert('Atenção', 'Confirma a remoção do contato?',
      [
        {
          text: 'Sim',
          onPress: () => efetivaRemoverContato(identificador),
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ]);
  }

  async function efetivaRemoverContato(identificador) {
    try {
      const contatoAux = contatos.filter(contato => contato.id != identificador);
      const jsonValue = JSON.stringify(contatoAux);
      await AsyncStorage.setItem('@contatos', jsonValue);
      Keyboard.dismiss();
      Alert.alert('Contato apagado com sucesso!!!');
      limparCampos();
      await carregaDados();
    } catch (e) {
      Alert.alert(e.toString());
    }
  }


  return (
    <View style={styles.container}>
      
      <View style={styles.containerCampoTexto}>
        <Text style={styles.legenda}>Código</Text>
        <TextInput 
          style={styles.caixaTexto}
          keyboardType='decimal-pad'
          onChangeText={(texto)=> setCodigo(texto)}
          value={codigo}
        >
        </TextInput>
      </View>

      <View style={styles.containerCampoTexto}>
        <Text style={styles.legenda}>Nome</Text>
        <TextInput 
          style={styles.caixaTexto}
          keyboardType='ascii-capable'
          onChangeText={(texto)=> setNome(texto)}
          value={nome}
        >
        </TextInput>
      </View>

      <View style={styles.containerCampoTexto}>
        <Text style={styles.legenda}>Email</Text>
        <TextInput 
          style={styles.caixaTexto}
          keyboardType='ascii-capable'
          onChangeText={(texto)=> setEmail(texto)}
          value={email}
        >
        </TextInput>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.containerCampoTexto}>
          <Text style={styles.legenda}>Senha</Text>
          <TextInput 
            style={styles.caixaTextoSenha}
            keyboardType='ascii-capable'
            onChangeText={(texto)=> setEmail(texto)}
            value={email}
                        >
          </TextInput>
        </View>
        <View style={styles.containerCampoTexto}>
          <Text style={styles.legenda}>Confirmar botaoSenha</Text>
          <TextInput 
            style={styles.caixaTextoSenha}
            keyboardType='ascii-capable'
            onChangeText={(texto)=> setEmail(texto)}
            value={email}
                        >
          </TextInput>
        </View>
      </View>

      <View style={styles.containerRow}>
        <TouchableOpacity style={styles.botaoSenha} onPress={() => salvaDados()}> 
          <Text style={styles.legenda}>Salvar</Text>       
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoSenha} onPress={() => carregaDados()}> 
          <Text style={styles.legenda}>Carregar</Text>       
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => apagarTudo()}> 
          <Text style={styles.legenda}>Limpar</Text>       
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

