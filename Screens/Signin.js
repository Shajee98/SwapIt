import React from 'react'
import {Button, TextField} from '@material-ui/core'
import { InputAdornment } from '@material-ui/core';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

function Signin({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{marginTop: "20px", textAlign: "center"}}>Swap it</Text>
            <View style={styles.inputContainer}>
            <TextField variant="outlined" autoFocus style={{margin: "10px"}} label="Email"/>
            <TextField variant="outlined" style={{margin: "10px"}} label="Password"/>
            </View>
            <Button style={{width: "200px", alignSelf: "center", marginTop: "20px", borderRadius: "5px", backgroundColor: "green"}} onClick={() => navigation.navigate("HomePage")}>Login</Button>
            <View style={{flexDirection: "row", marginTop: "10px", alignItems: "center", alignSelf: "center"}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={{color: "green"}}>Signup</Text>
            </TouchableOpacity>
           </View>
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
     container: {
        //  flex: 1,
        //  height: "100px",
         alignItems: "center",
     },
     inputContainer: {
        marginTop: "100px",
       width: "300px",
     }
})
