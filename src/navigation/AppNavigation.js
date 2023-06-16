import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import ProductoStack from "./ProductoStack";
import { screen } from "../utils/screenName";
import CarritoStack from "./CarritoStack";
import CuentaStack from "./CuentaStack";
import { color } from "@rneui/base";
import CarritoScreen from "../screens/Carrito/CarritoScreen";

const Tab = createBottomTabNavigator();

export const AppNavigation = ({ newProduct, setNewProduct }) => {
  return (
    <Tab.Navigator
      screenOptions={(route) => ({
        headerShown: false,
        tabBarActiveTintColor: `#0C8BF5`,
        tabBarInactiveTintColor: `black`,
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.producto.tab}
        children={(props) => (
          <ProductoStack {...props} setNewProduct={setNewProduct} />
        )}
        options={{ title: "Productos" }}
      />
      <Tab.Screen
        name={screen.carrito.tab}
        children={(props) => (
          <CarritoStack {...props} newProduct={newProduct} />
        )}
        options={{ title: "Carrito" }}
      />
      <Tab.Screen
        name={screen.cuenta.tab}
        component={CuentaStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name === screen.producto.tab) {
    iconName = "shopping-cart";
  } else if (route.name === screen.carrito.tab) {
    iconName = "cart-plus";
  } else if (route.name === screen.cuenta.tab) {
    iconName = "user";
  }

  return <Icon name={iconName} color={color} size={size} />;
};
