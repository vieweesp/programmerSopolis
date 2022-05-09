import React from "react";
import { SafeAreaView, Text, View } from "react-native-safe-area-context";
import EStyleSheet from "react-native-extended-stylesheet";

const Signup = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Signup
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Signup;

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