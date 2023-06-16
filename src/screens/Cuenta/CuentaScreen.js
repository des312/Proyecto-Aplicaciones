import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image, Input, Icon, Button } from "@rneui/themed";
import { styles } from "./CuentaScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/screenName";
import LoginForm from "../../Components/Auth/CuentaFormulario/LoginForm";
import { useState } from "react";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../Components/Auth/CuentaFormulario/LoginForm.data";

const CuentaScreen = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        console.log("Hola");
        navigation.navigate(screen.carrito.carrito);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Usuario o contraseña incorrecta",
          text2: "Inténtelo de nuevo",
        });
      }
    },
  });

  const goToRegister = () => {
    navigation.navigate(screen.cuenta.registro);
  };
  const [showPassword, setShowPassword] = useState(false);

  const showHiddenPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../assets/Img/Login.png")}
        style={styles.image}
      />
      <Text style={styles.title}>CUENTA</Text>

      <View style={styles.content}>
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
        <Button
          title="Iniciar sesión"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnLogin}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default CuentaScreen;
