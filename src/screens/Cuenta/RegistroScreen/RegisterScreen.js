import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Text, Image, Input, Icon, Button } from "@rneui/themed";
import { styles } from "./RegisterScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { Toast } from "react-native-toast-message";
import { screen } from "../../../utils/screenName";
import { initialValues } from "./RegisterScreen.data";
import { validationSchema } from "./RegisterScreen.data";


const RegisterForm = () => {
  const navigation = useNavigation();
  //hook useState
  const [showPassword, setShowPassword] = useState(false);
  //hook
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log("Formulario");
      console.group(formValue);
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        //console.log(error);
        ErrorToast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registrarse",
          text2: "Inténtalo de nuevo",
        });
      }
    },
  });

  const showHiddenPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView style={styles.container}>
     

      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Confirmar Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
        errorMessage={formik.errors.confirmPassword}
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
};

export default RegisterForm;