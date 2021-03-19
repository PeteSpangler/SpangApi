import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Image, Button } from "react-native";

class ListView extends Component {
  render() {
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
});

export default ListView;
