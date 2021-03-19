import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import client from "./../../api/client";

const DetailView = ({ route }) => {
  const [detail, setDetail] = useState("");
  const { objurl } = route.params;

  const getDetail = async (url) => {
    try {
      const response = await client.get(url);
      if (!response.ok) {
        setDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail(objurl);
  }, []);
  return (
    <View style={styles.center}>
      <FlatList
        horizontal={true}
        data={detail.pizzeria_images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.pizzaImage}
              source={{
                uri: item.image,
              }}
            />
          );
        }}
      />
      <Text style={styles.title}>Pizzeria: {detail.pizzeria_name}</Text>
      <Text style={styles.details}>Address: {detail.street}</Text>
      <Text style={styles.details}>
        City: {detail.city}, {detail.state},{detail.zip_code}
      </Text>
      <Text style={styles.details}>Web: {detail.website}</Text>
      <Text style={styles.details}>Ph: {detail.phone_number}</Text>
      <Text style={styles.details}>Description: {detail.description}</Text>
      <Text style={styles.details}>Email: {detail.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pizzaImage: {
    width: 400,
    height: 400,
    borderRadius: 20,
  },
  title: {
    fontFamily: "Cochin",
    margin: 10,
    marginBottom: 5,
    color: "red",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  details: {
    margin: 10,
    marginBottom: 5,
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DetailView;
