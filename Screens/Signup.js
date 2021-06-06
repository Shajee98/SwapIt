import React from 'react'
import {Button, TextField} from '@material-ui/core'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

function Signup({navigation}) {
    return (
       <View style={styles.container}>
           <Text style={{textAlign: "center", marginTop: "20px"}}>Swap It</Text>
           <View style={styles.inputContainer}>
           <TextField variant="outlined" style={{margin: "10px"}} label="Full Name"/>
           <TextField variant="outlined" style={{margin: "10px"}} label="Email"/>
           <TextField variant="outlined" style={{margin: "10px"}} label="Password"/>
           <TextField variant="outlined" style={{margin: "10px"}} label="Phone No."/>
           </View>
           <Button variant="contained" style={{width: "200px", alignSelf: "center", marginTop: "20px", borderRadius: "5px", backgroundColor: "green"}}>Register</Button>
           <View style={{flexDirection: "row", marginTop: "10px", alignItems: "center", alignSelf: "center"}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text style={{color: "green"}}>SignIn</Text>
            </TouchableOpacity>
           </View>
       </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: "100%",
        alignItems: "center",
    },
    inputContainer: {
       marginTop: "30px",
       width: "300px",
    },
    input: {
       flexDirection: "row",
       margin: "40px"
    }
})
