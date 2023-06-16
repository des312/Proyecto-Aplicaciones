import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import ProductoScreen from "../screens/Producto/ProductoScreen";
import ProductosWhScreen from "../screens/Producto/Categorias/ProductosWhScreen";
import ProductosVodkaScreen from "../screens/Producto/Categorias/ProductosVodkaScreen";
import ProductosTequilaScreen from "../screens/Producto/Categorias/ProductosTequilaScreen";
import ProductosRonScreen from "../screens/Producto/Categorias/ProductosRonScreen";
import ProductosVinoScreen from "../screens/Producto/Categorias/ProductosVinoScreen";

const Stack = createNativeStackNavigator();

const ProductoStack = ({ setNewProduct }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.producto.producto}
        component={ProductoScreen}
        options={{ title: "Productos" }}
      />
      <Stack.Screen
        name={screen.producto.whisky}
        children={(props) => (
          <ProductosWhScreen {...props} setNewProduct={setNewProduct} />
        )}
        options={{ title: "Whisky" }}
      />
      {/* <Stack.Screen
        name={screen.producto.whisky}
        component={ProductosWhScreen }
        options={{ title: "Whisky" }}
      /> */}
      <Stack.Screen
        name={screen.producto.vodka}
       children={(props)=>( <ProductosVodkaScreen {...props} setNewProduct={setNewProduct}/>)}
        options={{ title: "Vodka" }}
      />
      <Stack.Screen
        name={screen.producto.tequila}
        children={(props)=>( <ProductosTequilaScreen {...props} setNewProduct={setNewProduct}/>)}
        options={{ title: "Tequila" }}
      />
      <Stack.Screen
        name={screen.producto.ron}
        children={(props)=>( <ProductosRonScreen {...props} setNewProduct={setNewProduct}/>)}
        options={{ title: "Ron" }}
      />
      <Stack.Screen
        name={screen.producto.vino}
        children={(props)=>( <ProductosVinoScreen {...props} setNewProduct={setNewProduct}/>)}
        options={{ title: "Vino" }}
      />
    </Stack.Navigator>
  );
};

export default ProductoStack;
