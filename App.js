import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, 
  TouchableOpacity, Keyboard,Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

import styles from "./styles";



export default function App() {

  {/*  useState renderiza a tela mediante alteração na variavel */}

  {/*  icones podem ser encontrados aqui: https://icons.expo.fyi/Index */}
  
  const [codigo,setCodigo] = useState("")
  const [nome,setNome] = useState("")
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const [confirmarSenha,setConfirmarSenha] = useState("")
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)
  const [isPasswordConfVisible, setisPasswordConfVisible] = useState(true)
  const [contatos, setContatos] = useState({});
  const [total, setTotal] = useState(0);

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
        console.log("Carregando dados..")
        const obj = JSON.parse(jsonValue);
        setContatos(obj);
        console.log(obj)
        setTotal(contatos.length)
      }
      else {
        setContatos([]);
        setTotal(0)
      }

    } catch (e) {
      Alert.alert(e.toString());
    }
  }
  async function salvaDados() {

    console.log("salvando..")

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
    let index = contatos.findIndex(c => c.id === codigo);
    const jsonValue1 = JSON.stringify(contatos);
    console.log("pesquisa: "+ jsonValue1)
    console.log("Index "+index)
    let novoRegistro = true;
    if(index>=0)
    {
      novoRegistro=false;
    }
    console.log("iniciando objeto.. ")
    let obj = {
      id: codigo,
      nome: nome,
      email: email,
      senha: senha
    };

    
    try {
      

      if (novoRegistro===true)
      {
        console.log("Novo objeto!")
        contatos.push(obj)
      }       
      else
      {
        console.log("objeto já existia.. alterando")
        contatos[index] = obj;
      }
        
      

      const jsonValue = JSON.stringify(contatos);
      await AsyncStorage.setItem('@contatos', jsonValue);
      console.log("Salvo: "+ jsonValue)
      console.log("tamanho: "+ contatos.length)
      setTotal(contatos.length)
      Keyboard.dismiss();
      Alert.alert('Dados salvos com sucesso!!!');
      limparCampos();

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
      limparCampos()
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
  function carregarUsuarios()
  {

    console.log("Carregar usuarios!")
    console.log(Number.parseInt(codigo))
    console.log(contatos)
    console.log("pesquisa feita")
     // Use the filter method to search for objects with the desired ID
    const matchingObjects = contatos.filter((obj) => obj.id === codigo);
    if(matchingObjects.length>0)
    {
      setNome(matchingObjects[0].nome)
      setEmail(matchingObjects[0].email)
      setSenha(matchingObjects[0].senha)
      Alert.alert("Usuário encontrado!")
    }
    else
      Alert.alert("Usuário não encontrado!")
    Keyboard.dismiss();
    

  }
  function ExcluirUsuarioEspecifico()
  {

    console.log("Carregar usuarios!")
    console.log(Number.parseInt(codigo))
    console.log(contatos)
    console.log("pesquisa feita")
     // Use the filter method to search for objects with the desired ID
    let index = contatos.findIndex(c => c.id === codigo);
    if(index>=0)
    {
      contatos.splice(index,1)
      Alert.alert("usuário excluído com sucesso!")
    }
    Keyboard.dismiss();
    limparCampos();

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
  function btnMostraSenha()
  {
    console.log("apertou senha")
    setIsPasswordVisible(!isPasswordVisible)

  }
  function btnMostraConfiSenha()
  {
    console.log("apertou senha")
    setisPasswordConfVisible(!isPasswordConfVisible)

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
      <View style={[styles.containerTitulo,styles.sombra]}>
        <Text style={styles.titulo}>Cadastro de usuários</Text>
      </View>
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
        <View style={styles.containerCampoTextoSenha}>
        <Text style={styles.legendaSenha}>Senha</Text>
          <View style={styles.containerSenha}>    
              <TouchableOpacity style={styles.icon} onPress={()=>btnMostraSenha()}> 
                {isPasswordVisible?<Ionicons name="eye-off-sharp" size={24} color="white" />:
                <Ionicons name="eye-sharp" size={24} color="white"/>}
              </TouchableOpacity>  
              <TextInput 
                style={styles.caixaTextoSenha}
                secureTextEntry={isPasswordVisible}
                keyboardType='ascii-capable'
                onChangeText={(texto)=> setSenha(texto)}
                value={senha} />
          </View>
        </View>
        <View style={styles.containerCampoTextoSenha}>
        <Text style={styles.legendaSenha}>Confirmar Senha</Text>
          <View style={styles.containerSenha}>    
              <TouchableOpacity style={styles.icon} onPress={()=>btnMostraConfiSenha()}> 
                {isPasswordConfVisible?<Ionicons name="eye-off-sharp" size={24} color="white" />:
                <Ionicons name="eye-sharp" size={24} color="white"/>}
              </TouchableOpacity>  
              <TextInput 
                style={styles.caixaTextoSenha}
                secureTextEntry={isPasswordConfVisible}
                keyboardType='ascii-capable'
                onChangeText={(texto)=> setConfirmarSenha(texto)}
                value={confirmarSenha} />
          </View>
        </View>
      </View>

      <View style={styles.containerRow}>
        <TouchableOpacity style={[styles.botao,styles.sombra]} onPress={() => salvaDados()}> 
          <Text style={styles.legenda}>Salvar</Text>       
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao,styles.sombra]} onPress={() => carregarUsuarios()}> 
          <Text style={styles.legenda}>Carregar</Text>       
        </TouchableOpacity>
      </View>

      <View style={styles.containerRow}>
        <TouchableOpacity style={[styles.botao,styles.sombra]} onPress={() => apagarTudo()}> 
            <Text style={styles.legenda}>Limpar</Text>       
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao,styles.sombra]} onPress={() => ExcluirUsuarioEspecifico()}> 
          <Text style={styles.legenda}>Excluir usuário</Text>       
        </TouchableOpacity>
      </View>

      <Text style={styles.legendaResultado}>{"Total de registro(s) "+total}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

