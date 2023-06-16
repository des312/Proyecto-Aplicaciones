import React, { useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { screen } from "../../../utils/screenName";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/base";

const ProductosTequilaScreen = ({route, setNewProduct, navigation}) => {
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
      name: "Tequila Azteca",
      price: 20,
      ml: "500 ml",
      gAlcohol: "40% de Alcohol ",
      description:
      "Rodeado de sembríos de agave azul, nace una leyenda para los mexicanos Tequila Jimador Azteca, específicamente nos encontramos en el estado de Jalisco. En donde jimadores expertos comienzan a cosechar agave azul para deshojarle y dejarle solo al corazón de la penca.   ",
      Image: require("../../../../assets/Img/Azteca.png"),
    },
  ];
  const productosL1 = [
    {
      id: 1754,
      name: "Tequila el Charro",
      price: 30,
      ml: "350ml",
      gAlcohol: "41% de Alcohol ",
      description:
        "es una empresa socialmente responsable y se ha dado a la tarea de utilizar en sus procesos de producción el mejor equipo verde para el cuidado de nuestro ecosistema. ",

      Image: require("../../../../assets/Img/Charro.png"),
    },
  ];

  return (
    <ScrollView>
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
      {productosL1.map((producto) => {
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
export default ProductosTequilaScreen;
