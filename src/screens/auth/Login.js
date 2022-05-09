import React from "react";
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import EStyleSheet from "react-native-extended-stylesheet";

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Login
                </Text>
            </View>
        </SafeAreaView>
  );
}

export default Login;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        background: '$authBg',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '$primary',
        fontFamily: '$400Regular',
        fontWeight: '$fontWeight600',
        fontSize: '$font24',
    }
});