import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ userInput, onUserInputChange, onUserInputSubmit }) => {
  return (
    <View style={styles.searchBarBackGround}>
      <Feather name="search" style={styles.searchIcon} />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchBar}
        placeholder="search"
        value={userInput}
        //onChangeText and onEndEditing can also be called this way
        //onChangeText={(newUserInput) => onUserInputChange(newUserInput)}
        //onEndEditing={() => console.log("submitted")}
        onChangeText={onUserInputChange}
        onEndEditing={onUserInputSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarBackGround: {
    borderRadius: 10,
    backgroundColor: "#ced2d9",
    marginTop: 10,
    height: 30,
    marginHorizontal: 20,
    flexDirection: "row",
  },

  searchIcon: {
    fontSize: 25,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  searchBar: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
