import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsView from "../components/resultsView";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        renderItem={({ item }) => {
          /*"item" is basically each result from the api. You need to use only "item". Its a convention */
          return <ResultsView result={item} />;
        }}
        keyExtractor={(forEachResult) =>
          forEachResult.id
        } /* "id" is one of the object from the API */
      ></FlatList>
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
