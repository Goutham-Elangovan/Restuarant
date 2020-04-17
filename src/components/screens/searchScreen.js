import React, { useState } from "react";
import { View, Text, Stylesheet } from "react-native";
import SearchBar from "../searchBar";

const SearchScreen = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <View>
      <SearchBar
        userInput={userInput}
        onUserInputChange={(newUserInput) => setUserInput(newUserInput)}
        onUserInputSubmit={() => console.log("Submitted")}
      />
      <Text>{userInput}</Text>
    </View>
  );
};
export default SearchScreen;
