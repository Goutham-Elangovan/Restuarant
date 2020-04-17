import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchBar from "./src/components/searchBar";
import SearchScreen from "./src/components/screens/searchScreen";

const navigator = createStackNavigator(
  {
    SearchBar: SearchBar,
    SearchScreen: SearchScreen,
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Restuarant",
    },
  }
);

export default createAppContainer(navigator);
