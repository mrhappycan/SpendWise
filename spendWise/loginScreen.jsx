import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOPacity
} from 'react-native'

import axios from "axios";

const LoginScreen = () => {
    return(
       <View>
        <View>
            <Text>
                SpendWise
            </Text>
        </View>
        <TextInput
            placeholder="username"
        />
        <TextInput
            placeholder="password"
        />
        <View>

        </View>

        <TouchableOPacity>
            <Text>Giriş yap</Text>
        </TouchableOPacity>
       </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        width: '%100',
        height: '%100',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default LoginScreen