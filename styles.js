import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1d0f6e',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding:'10%'
    },
    containerCampoTexto: {
      backgroundColor: '#1d0f6e',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height:'auto',
      width: 'auto',
    },
    containerRow: {
      flexDirection:"row",
      backgroundColor: '#1d0f6e',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
    },
    containerBtnLabel: {
        alignItems: 'center',
        backgroundColor: '#1d0f6e',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
      },
    linhaBotao: {
      flexDirection:"row",
      height:'20%',
      width: "100%",
      justifyContent:"space-around",
      height:'auto'
    },
    legenda: {
      fontSize: 20,
      color: 'white',
      fontWeight: '500',
    },
    legendaBtnJogarNovamente: {
      fontSize:20,
      color: 'black',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: '500',
    },
    caixaTextoSenha: {
        fontSize:20,
        color: 'white',
        fontWeight: '500',
        fontStyle: 'italic',
        color: 'white',
        width: 150,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginRight:5,
        marginLeft:5
      },
    caixaTexto: {
      fontSize:20,
      color: 'white',
      fontWeight: '500',
      fontStyle: 'italic',
      color: 'white',
      width: 250,
      height: 40,

      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    botao: {
      width: 300,
      backgroundColor: 'black',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingVertical:5,
      marginBottom:5,
      marginTop: 5, 
    },
    botaoSenha: {
      width: '45%',
      backgroundColor: 'black',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingVertical:5,
      marginBottom:5,
      marginTop: 5, 
    },
    botaoJogaNovamente: {
      justifyContent: 'center',
      width: '70%',
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical:5,
      marginBottom:5,
      marginTop: 20, 
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
    },
    resultado:{
      fontSize:25,
      color: 'white',
      fontWeight: '500',
      fontStyle: 'italic',
      marginTop:10
    },
    imagem:{
      height: 200,
      width: 200
    },
    iconeBotao:{
      color:'white',
      marginLeft:'25%',
      marginRight:20,
    }
  
  });
  




export default styles;