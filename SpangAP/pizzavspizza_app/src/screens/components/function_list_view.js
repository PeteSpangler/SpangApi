import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import client from "./../../api/client";
import Card from "./shared/card";

const ListView = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getList = async () => {
    console.log(client);
    const response = await client.get("/");
    setData(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const mytext = "A Spang Production";
  return (
    <SafeAreaView style={styles.center}>
      <Image
        style={styles.pizzaImage}
        source={{ uri: "https://bit.ly/book-pizza" }}
      />
      <Text style={styles.baseText}>Pizza vs. Pizza App Bruh</Text>
      <Text style={styles.newText}>{mytext}</Text>
      <Text>{data.length} Pizzerias</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", {
                  objurl: item.absolute_url,
                  hey: "BestPizza ",
                });
              }}
            >
              <Card
                logo={item.logo_image}
                title={item.pizzeria_name}
                details={item.city}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#577399",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText: {
    color: "red",
  },
  pizzaImage: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "green",
    fontSize: 20,
  },
});

export default ListView;
