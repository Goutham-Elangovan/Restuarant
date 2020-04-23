import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchBar from "./src/components/searchBar";
import SearchScreen from "./src/components/screens/searchScreen";
import ShowResultsScreen from "./src/components/screens/showResultsScreen";

const navigator = createStackNavigator(
  {
    SearchBar: SearchBar,
    SearchScreen: SearchScreen,
    ShowResultsScreen: ShowResultsScreen,
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Restuarant",
    },
  }
);

export default createAppContainer(navigator);
