import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
    confirmPassword: "",
  };
};

export const validationSchema= () => {
  return Yup.object({
    email: Yup.string()
      .email("El email es incorrecto")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
    confirmPassword: Yup.string()
      .required("La confirmacion de la contraseña es obligatoria")
      .oneOf([Yup.ref("password")], "Las contraseñas no coiciden"),
  });
};
