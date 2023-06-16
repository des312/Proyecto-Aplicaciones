import { AppNavigation } from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { initFirebase } from "./src/utils/FireBase";
import { Toast } from "react-native-toast-message";

const App = () => {
  const [newProduct, setNewProduct] = useState(null);

  return (
    <>
      <NavigationContainer>

        <AppNavigation newProduct={newProduct} setNewProduct={setNewProduct} />
      </NavigationContainer>
      
    </>
  );
};

export default App;
