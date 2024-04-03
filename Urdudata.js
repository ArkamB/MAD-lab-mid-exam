import React from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";

export const Urdudata = (props) => {
  const urduData = [
    { id: "1", title: "دعوت اسلامی اور اس کے مطالبات" },
    { id: "2", title: "مولانا سید ابو الاعلیٰ مودودیؒ" },
    { id: "3", title: "مسلمانوں کا ماضی وحال  اور مستقبل کے لیے لائحہ عمل" },
    { id: "4", title: "حریکِ اِسلامی کی اخلاقی بنیادی" }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={urduData}
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
      <Button title="Data Fetching" onPress={()=>{props.navigation.navigate('Search')}} />
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
