import React, { useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { screen } from "../../../utils/screenName";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/base";

const ProductosVinoScreen = ({route, setNewProduct, navigation}) => {
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
      name: "Canciller Blend Vino Tinto Syrah Malbec",
      price: 20,
      ml: "500 ml",
      gAlcohol: "40% de Alcohol ",
      description:
        "En boca es de impacto dulce y untuoso, muy bien balanceado por la acidez, con sabores a frutados y notas ligeras de vainilla y tostado, que le brindan un excelente y prolongado final.   ",
      Image: require("../../../../assets/Img/Canciller.png"),
    },
  ];
  const productosL1 = [
    {
      id: 1754,
      name: "Peter Mertes Liebfraumilch",
      price: 30,
      ml: "350ml",
      gAlcohol: "41% de Alcohol ",
      description:
        "De color amarillo brillante, tiene un aroma fresco y un sabor a frutas y flores equilibrado, sorprende a tu paladar con este vino blanco. ",

      Image: require("../../../../assets/Img/Peter.png"),
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
          </ListItem>
        );
      })}
    </ScrollView>
  );
};
export default ProductosVinoScreen;
