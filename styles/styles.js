import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        flex:1,
      
        
       },
       text:{
        color:'red',
        fontSize: 25,
        textAlign:'center',
      
       },
       textPadding:{
        padding:20
       },
       buttons:{
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        },
        button:{
            marginVertical: 10 ,
            backgroundColor: 'black',
            padding:4
        },
        buttonText:{
            color : 'snow',
            fontWeight:'bold',
            fontSize:16,
            textDecorationLine:'underline',
            textDecorationStyle:'double',

        }
})