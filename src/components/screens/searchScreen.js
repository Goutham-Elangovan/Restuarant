import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../searchBar";
import useResults from "../../hooks/useResults";
import ResultsList from "../resultsList";

const SearchScreen = () => {
  const [userInput, setUserInput] = useState("");
  const [searchApi, errorMessage, results] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((forEachResult) => {
      return forEachResult.price === price;
    });
  };

  //console.log(results);

  //Calling searchApi when component is rendered first time
  //searchApi('pasta') - This will work but since the state changes, the component re
  //renders in an infinite loop. Try console.log("hi") in searchApi function to reproduce it!
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar
          userInput={userInput}
          onUserInputChange={setUserInput}
          onUserInputSubmit={() => searchApi(userInput)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : <Text>{userInput}</Text>}
        <Text>We have found {results.length} results</Text>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big spender"
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Cant even think of it"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    flex: 1,
  },
});

export default SearchScreen;
