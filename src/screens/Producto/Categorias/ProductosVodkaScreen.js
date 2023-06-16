import React, { useState } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { screen } from "../../../utils/screenName";
import { Input, ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Image } from "@rneui/base";

const ProductosVokdkaScreen = ({route, setNewProduct, navigation}) => {
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
      name: "Russkaya",
      price: 20,
      ml: "500 ml",
      gAlcohol: "40% de Alcohol ",
      description:
        "Russkaya, habría nacido inspirado por el apelativo de un licor. Sobre la vida del querido cantante se conoce poco, lo que se sabe es que vivió muchas carencias económicas, sobre todo en la infancia, época en la que ayudaba a sus padres en el distrito azangarino de San Juan de Salinas, de donde proviene.",
      Image: require("../../../../assets/Img/Russkaya.png"),
    },
  ];
  const productosL1 = [
    {
      id: 1754,
      name: "GREY GOOSE ",
      price: 30,
      ml: "350ml",
      gAlcohol: "41% de Alcohol ",
      description:
        "Este licor surge de la idea de Sidney Frank, propietario y director de la compañía Sidney Frank Importing Co, quien deseaba crear un vodka premium para el mercado estadunidense, por lo que se dispuso a buscar los mejores en el área para llevar a cabo su idea.",

      Image: require("../../../../assets/Img/Groose.png"),
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

export default ProductosVokdkaScreen;
