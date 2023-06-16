import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Button } from "react-native";
import { Image } from "@rneui/themed";
import { styles } from "./CarritoScreen.styles";
import { ListItem } from "@rneui/base";

const CarritoScreen = ({ newProduct }) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    if (newProduct != null) {
      setProduct([...products, newProduct]);
    }
  }, [newProduct]);
  return (
    <ScrollView style={styles.back}>
      <Image
        source={require("../../../assets/Img/CarritoCompras1.png")}
        style={styles.image}
      />

      <Text style={styles.txt}> CARRITO </Text>
      {products.map((producto)=>{
        return( 
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{producto.name}</ListItem.Title>
              <ListItem.Title>{producto.ml}</ListItem.Title>
              <ListItem.Subtitle>{producto.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )
      })}
    </ScrollView>
  );
};




export default CarritoScreen;
