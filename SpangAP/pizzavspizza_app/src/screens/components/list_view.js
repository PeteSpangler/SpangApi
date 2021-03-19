import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  Button,
  FlatList,
} from "react-native";
import client from "./../../api/client";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await client.get("/");
      if (!response.ok) {
        this.setState({ data: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data } = this.state;
    const mytext = "A Spang Production";
    return (
      <SafeAreaView style={styles.center}>
        <Image
          style={styles.pizzaImage}
          source={{ uri: "https://bit.ly/book-pizza" }}
        />
        <Text style={styles.baseText}>Pizza vs. Pizza App Bruh</Text>
        <Text style={styles.newText}>{mytext}</Text>
        <Text style={styles.title}>List View</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={styles.itemText}>
              {item.pizzeria_name}, {item.city}
            </Text>
          )}
        />
        <Button
          title="list Item, Click for Details"
          onPress={() => this.props.navigation.navigate("Detail")}
        ></Button>
      </SafeAreaView>
    );
  }
}

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
