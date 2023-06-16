import React from "react";
import { View, ScrollView } from "react-native";
import { screen } from "../../utils/screenName";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Image } from "@rneui/base";
import {styles}  from "./ProductoScreen.styles";

const ProductoScreen = () => {
  
  const navigation = useNavigation();

  const productosWhisky = [
    {
      name: "Whisky",
      description:
        " Es una bebida alcohólica obtenida por la destilación de la malta fermentada. La malta es cualquier grano que haya germinado, particularmente cebada o centeno, y que luego haya secado.",
      Image: require("../../../assets/Img/TitlleWh.png"),
    },
  ];

  const productosRon = [
    {
      name: "Ron",
      description:
        "Es una bebida alcohólica destilada que se obtiene de la caña de azúcar o directamente del jugo de la caña ya sea por fermentación o destilación.",
      Image: require("../../../assets/Img/LogoRon.png"),
    },
  ];
  const productosVodka = [
    {
      name: "Vodka",
      description:
        "Es un destilado de proviene de la fermentación de patata, trigo, cebada, uva, remolacha y en general cualquier planta rica en almidón.",
      Image: require("../../../assets/Img/LogoVodka.png"),
    },
  ];
  const productosTequila = [
    {
      name: "Tequila",
      description:
        "Es un destilado que proviene de la fermentación y posterior destilación del jugo procedente de la planta de agave",
      Image: require("../../../assets/Img/LogoTequila.png"),
    },
  ];
  const productosVino = [
    {
      name: "Vino",
      description:
        "Es una bebida alcohólica obtenida de la uva mediante fermentación alcohólica de su mosto o zumo",
      Image: require("../../../assets/Img/LogoVino.png"),
    },
  ];

  return (
    <ScrollView style={{Color: "#12DFBE" }}>
      {productosWhisky.map((producto,index) => {
        return (
          <ListItem
          key={`whisky-${index}`} 
            onPress={() =>
              navigation.navigate(screen.producto.whisky, producto)
            }
          >
            <ListItem.Content style={styles.liststyle}>
              <ListItem.Title  style={{fontSize:20, fontWeight: "bold"}}>{producto.name}</ListItem.Title>
              <Image source={producto.Image} style={[styles.img, {marginLeft: 180}]} />
            </ListItem.Content>
          </ListItem>
        );
      })}

      {productosRon.map((producto, index) => {
        return (
          <ListItem
          key={`ron-${index}`}
            onPress={() => navigation.navigate(screen.producto.ron, producto)}
          >
            <ListItem.Content style={styles.liststyle}>
              <ListItem.Title  style={{fontSize:20, fontWeight: "bold"}}>{producto.name}</ListItem.Title>
              <Image source={producto.Image} style={[styles.img, {marginLeft: 200}]} />
            </ListItem.Content>
          </ListItem>
        );
      })}
      {productosTequila.map((producto, index) => {
        return (
          <ListItem
          key={`tequila-${index}`}
            onPress={() =>
              navigation.navigate(screen.producto.tequila, producto)
            }
          >
            <ListItem.Content style={styles.liststyle}>
              <ListItem.Title style={{fontSize:20, fontWeight: "bold"}}>{producto.name}</ListItem.Title>
              <Image source={producto.Image} style={[styles.img, {marginLeft: 180}]} />
            </ListItem.Content>
          </ListItem>
        );
      })}
      {productosVodka.map((producto, index) => {
        return (
          <ListItem
          key={`vodka-${index}`}
          onPress={() => navigation.navigate(screen.producto.vodka, { ...producto })}

          >
            <ListItem.Content style={styles.liststyle}>
              <ListItem.Title style={{fontSize:20, fontWeight: "bold"}}>{producto.name}</ListItem.Title>
              <Image source={producto.Image} style={[styles.img, {marginLeft: 180}]} />
            </ListItem.Content>
          </ListItem>
        );
      })}
      {productosVino.map((producto, index) => {
        return (
          <ListItem
          key={`vino-${index}`}
            onPress={() => navigation.navigate(screen.producto.vino, producto)}
          >
            <ListItem.Content style={styles.liststyle}>
              <ListItem.Title style={{fontSize:20, fontWeight: "bold"}}>{producto.name}</ListItem.Title>
              <Image source={producto.Image} style={[styles.img, {marginLeft: 195}]}/>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default ProductoScreen;
