import React from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";

export const DataFetching = (props) => {
  const bookData = [
    { id: "1", title: "To Kill a Mockingbird" },
    { id: "2", title: "1984" },
    { id: "3", title: "The Great Gatsby" },
    { id: "4", title: "Pride and Prejudice" },
    { id: "5", title: "The Catcher in the Rye" },
    { id: "6", title: "Animal Farm" },
    { id: "7", title: "Brave New World" },
    { id: "8", title: "The Hobbit" },
    { id: "9", title: "The Lord of the Rings" },
    { id: "10", title: "Harry Potter and the Sorcerer's Stone" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={bookData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text
              style={{
                fontSize: 20,
                backgroundColor: "blue",
                color: "white",
                borderWidth: 3,
                borderColor: "black",
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Search Screen" onPress={()=>{props.navigation.navigate('urdu')}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    margin: 5,
  },
});
