import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import CarritoScreen from "../screens/Carrito/CarritoScreen";

const Stack = createNativeStackNavigator();

const CarritoStack = ({ newProduct }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.carrito.carrito}
        children={(props) => (
          <CarritoScreen {...props} newProduct={newProduct} />
        )}
        options={{ title: "Carrito de compras" }}
      />
    </Stack.Navigator>
  );
};

export default CarritoStack;
