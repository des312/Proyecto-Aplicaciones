import React, { useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { screen } from "../../../utils/screenName";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/base";
import { styles } from "./Productos.styles";
const ProductosRonScreen = ({route, setNewProduct, navigation}) => {
  const product = route.params;
  const agregarCarro = () => {
    setNewProduct(product);
    navigation.navigate(screen.producto.producto)
  };

  let price = 20,
    price1 = 30;
  iva= 0.12;
  resultado = 0;
  
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const productosL = [
    {
      id: 1781,
      name: "Abuelo Ron Anejo",
      price: 20,
      ml: "500 ml",
      gAlcohol: "40% de Alcohol ",
      description:
      "Abuelo Añejo es elaborado de la fermentación de mieles de caña, en su envejecimiento y elaboración se han utilizado los más modernos procedimientos técnicos y la experiencia de una larga tradición ronera. Su calidad es lograda con tiempo, sombra y silencio.",
      Image: require("../../../../assets/Img/Anejo.png"),
    },
  ];
  const productosL1 = [
    {
      id: 1754,
      name: "Bacardi Ron Superior ",
      price: 30,
      ml: "350ml",
      gAlcohol: "41% de Alcohol ",
      description:
        "Bacardi es fundada el 4 de febrero por Don Facundo Bacardí Massó en Santiago de Cuba, al comprar una pequeña destilería con la cual revolucionaría el proceso de elaboración del ron, creando un líquido suave y de cuerpo ligero, teniendo como resultado lo que actualmente conocemos como ron BACARDÍ®.",

      Image: require("../../../../assets/Img/Bacardi.png"),
    },
  ];

  return (
    <ScrollView >
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
              <Text>El iva es del 12%={resultado=count * price*iva}</Text>
              
              <Text>Total a pagar={resultado+price*count}</Text>
            </ListItem.Content>
            <Button title="-" onPress={() => setCount(count - 1)} />
            <Button title="+" onPress={() => setCount(count + 1)} />
            <Button title="Agregar" onPress={agregarCarro}/>
          </ListItem>
        );
      })}
      {productosL1.map((producto) => {
        return (
          <ListItem >
            <ListItem.Content>
              <ListItem.Title>{producto.name}</ListItem.Title>
              <Image
                source={producto.Image}
                style={[styles.img, {alignSelf: "center"}]}
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
          </ListItem>
        );
      })}
    </ScrollView>
  );
};
export default ProductosRonScreen;
