import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsView from "../components/resultsView";
import { NavigationEvents } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
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
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowResultsScreen")}
            >
              <ResultsView result={item} />
            </TouchableOpacity>
          );
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
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
  },
});
