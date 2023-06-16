import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import CuentaScreen from "../screens/Cuenta/CuentaScreen";
import RegisterScreen from "../screens/Cuenta/RegistroScreen/RegisterScreen";


const Stack = createNativeStackNavigator();

const CuentaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.cuenta.cuenta}
        component={CuentaScreen}
        options={{ title: "Cuenta" }}
      />
       <Stack.Screen
        name={screen.cuenta.registro}
        component={RegisterScreen}
        options={{ title: "Registrarse" }}
      />
    </Stack.Navigator>
  );
};

export default CuentaStack;
