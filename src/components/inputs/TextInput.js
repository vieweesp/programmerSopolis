import * as React from "react";
import { Controller } from "react-hook-form";
import { Icon, Input, Text } from "react-native-elements";

export default function TextInput ({ name, required = true, minLength, maxLength, iconName, control, errors, inputStyle, errorValidationStyle}) {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required,
          minLength,
          maxLength,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={inputStyle}
            placeholderTextColor="black"
            leftIcon={
              <Icon name={iconName} type='ionicon' size={24} color='black'/>
            }
          />
        )}
        name={name}
      />
      {errors[name]?.type === "required" && <Text style={errorValidationStyle}>Campo requerido</Text>}
      {errors[name]?.type === "minLength" && <Text style={errorValidationStyle}>Longitud demasiado corta</Text>}
      {errors[name]?.type === "maxLength" && <Text style={errorValidationStyle}>Longitud demasiado larga</Text>}
    </>
  );
}
