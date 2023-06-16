import React, { useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { screen } from "../../../utils/screenName";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/base";
import { styles } from "./Productos.styles";

const ProductosWhScreen = ({ route, setNewProduct, navigation}) => {
  
  const product = route.params;
  const agregarCarro = () => {
    setNewProduct(product);
    navigation.navigate(screen.producto.producto)
  };

  let price = 20,
    price1 = 30;
  
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const productosL = [
    {
      id: 1781,
      name: "Ballatines",
      price: 20,
      ml: "500 ml",
      gAlcohol: "40% de Alcohol ",
      description:
        "Ballantine's Finest es un complejo, refinado y elegante whisky blended escocés, su sabor se considera ideal para satisfacer el estilo moderno. El color dorado claro de la marca y su inconfundible sabor provienen de una compleja mezcla de whiskies de malta y granos seleccionados especialmente.",
      Image: require("../../../../assets/Img/Ballatines.png"),
    },
  ];
  const productosLw = [
    {
      id: 1754,
      name: "Cuningham Whisky",
      price: 30,
      ml: "350ml",
      gAlcohol: "41% de Alcohol ",
      description:
        "Cunningham es un Whisky de elaborado en Ecuador, como gran amante de éste tipo de bebidas me dio mucha curiosidad probar que tan bueno podía ser un escoses de producción ecuatoriana",

      Image: require("../../../../assets/Img/CuninghamWhisky.png"),
    },
  ];

  return (
    <ScrollView style={styles.back}>
      {productosL.map((producto) => {
        return (
          <ListItem >
            <ListItem.Content>
              <ListItem.Title>{producto.name}</ListItem.Title>
              <Image
                source={producto.Image}
                style={{
                  width: 150,
                  height: 150,
                  alignItems: "center",
                }}
              />
              <ListItem.Subtitle>{producto.price}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.id}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.ml}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.gAlcohol}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.description}</ListItem.Subtitle>
              <Text>Cantidad {count}</Text>
              <Text>Precio {count * price}$</Text>
            </ListItem.Content>
            <Button title="-" onPress={() => setCount(count - 1)} />
            <Button title="+" onPress={() => setCount(count + 1)} />
            <Button title="Agregar" onPress={agregarCarro}/>
          </ListItem>
        );
      })}
      {productosLw.map((producto) => {
        return (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{producto.name}</ListItem.Title>
              <Image
                source={producto.Image}
                style={{
                  width: 150,
                  height: 150,
                  alignItems: "center",
                }}
              />
              <ListItem.Subtitle>{producto.price}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.id}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.ml}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.gAlcohol}</ListItem.Subtitle>
              <ListItem.Subtitle>{producto.description}</ListItem.Subtitle>
              <Text>Cantidad {count1}</Text>
              <Text>Precio {count1 * price1}$</Text>
            </ListItem.Content>

            <Button title="-" onPress={() => setCount1(count1 - 1)} />
            <Button title="+" onPress={() => setCount1(count1 + 1)} />
            <Button title="Agregar" onPress={agregarCarro}/>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

// const DetallesProductoScreen = ({ route }) => {
//   const produ = route.params;
//   return (
//     <View>
//       <Text>{produ.name}</Text>
//       <Text>{produ.price}</Text>
//       <Text>{produ.}</Text>
//     </View>
//   );
// };

export default ProductosWhScreen;
