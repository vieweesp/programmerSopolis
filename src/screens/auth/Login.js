import React, { useState } from "react";
import { View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, Button, Image } from "react-native-elements";
import Toast from "react-native-root-toast";

import { ErrorText, ActivityLoader } from "../../components/Shared";

import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput } from "../../components/inputs";

import { useAuth } from "../../providers/AuthProvider";
import { login } from "../../services/AuthService";

import styles from "../../styles/auth";

const Login = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [secureEntry, setsecureEntry] = useState(true);

    const { control, handleSubmit, formState: {errors} } = useForm();
  const { handleLogin } = useAuth();

    const _login = async (data) => {
        //TODO iniciar sesion
        alert("login ok");
    try {
      setLoading(true);
      const response = await login(data);
      await handleLogin(response.data);
      Toast.show(
          response.message,
        {
          position: Toast.positions.CENTER,
        }
      );
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
    }
    
    const toggleSecureEntry = () => {
        setsecureEntry(!secureEntry);
    }

    return (
        
            <View style={styles.container}>
                {loading === true ? <ActivityLoader /> : null }
                
                <Image 
                    style={{width: 100, height: 100, marginBottom: 20}}
                    source={ require("../../../assets/app_icon.png")}
                />

                <Text h2 style={styles.title}>
                    Login
                </Text>
                
                <ErrorText error={error} />

                <EmailInput 
                    name="email"
                    control={control}
                    errors={errors}
                    errorValidationStyle={styles.errorValidation}
                    inputStyle={styles.input}
                />

                <PasswordInput 
                    name="password"
                    control={control}
                    errors={errors}
                    errorValidationStyle={styles.errorValidation}
                    inputStyle={styles.input}
                    secureEntry={secureEntry}
                    toggleSecureEntry={toggleSecureEntry}
                />

                <Button
                    titleStyle={styles.buttonTitle}
                    buttonStyle={styles.button}
                    title="Acceder"
                    type="outline"
                    onPress={handleSubmit(_login)}
                />

                <Text
                    onPress={ () => navigation.navigate("Signup")}
                    style={styles.link}
                >
                    No tienes cuenta?
                </Text>

            </View>
        
  );
}

export default Login;

