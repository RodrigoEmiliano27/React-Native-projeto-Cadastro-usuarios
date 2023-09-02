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
      height:'15%',
      width: 'auto',
    },
    containerCampoTextoSenha: {
      backgroundColor: '#1d0f6e',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height:'auto',
      width: '50%',
    },
    sombra:{
      shadowColor: "#ffffff",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity:  0.21,
      shadowRadius: 7.68,
      elevation: 10
    },
    containerSenha: {
      flexDirection: 'row',
      alignItems: 'center',
      height:'auto',
      width: '100%',
    },
    containerRow: {
      flexDirection:"row",
      backgroundColor: '#1d0f6e',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height:'12%',
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
    legendaResultado: {
      fontSize: 25,
      marginTop:10,
      color: 'white',
      fontWeight: '500',
    },
    containerTitulo:{
      backgroundColor:'black',
      width:"100%",
      padding:10,
      borderRadius:20,
      

    },
    titulo: {
      fontSize: 30,
      color: 'white',
      textAlign:"center",
      fontWeight: '500',
      fontStyle:"italic",
      backgroundColor:'black',
      width:'100%'
    },
    legendaSenha: {
      fontSize: 20,
      color: 'white',
      fontWeight: '500',
      marginTop:-10
    },
    legendaBtnJogarNovamente: {
      fontSize:20,
      color: 'black',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: '500',
    },
    caixaTextoSenha: {
        flex:1,
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
      width: '45%',
      backgroundColor: 'black',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical:10,
      marginBottom:5,
      marginTop:15,
      marginLeft: 10,
      borderColor: '#4d2cda',
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
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingVertical: 10,
    },
    textInput: {
      flex: 1,
    },
    iconContainer: {
      marginLeft: 10,
    },
    icon: {
      position: 'absolute',
      right: 10, // Adjust this value to control the icon's position
      zIndex:1
    },
  
  });
  




export default styles;