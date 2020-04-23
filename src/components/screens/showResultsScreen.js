import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../../api/yelp";

const ShowResultsScreen = ({ navigation }) => {
  const [results, setResults] = useState(null);
  //Step 1
  const id = navigation.getParam("id");
  //Step 2
  useEffect(() => {
    getResult(id);
  }, []);
  //Step 3
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };
  //console.log(results);

  if (!results) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={results.photos}
        keyExtractor={(forEachResult) => forEachResult}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      ></FlatList>
    </View>
  );
};

export default ShowResultsScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
