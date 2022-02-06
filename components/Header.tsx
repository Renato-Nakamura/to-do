import {View, Text,StyleSheet } from "react-native"
export function Header(){
    return (
        <View style={styles.header}>
            <Text >Header  Teste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
      paddingTop:50,
      alignItems:"center",
      backgroundColor:"grey",
      width:"100%",
      height: "10%"
    }
  });