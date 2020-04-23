import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (firstTimeSearchTerm) => {
    console.log(firstTimeSearchTerm);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: "50",
          term: firstTimeSearchTerm,
          location: "Auckland",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("An error occured");
    }
  };

  //useEffect is used when the code has to be executed only once
  useEffect(() => {
    searchApi("indian"); //This is an initial search. Results of "indian" will appear when you start the app
  }, []);

  return [searchApi, errorMessage, results];
};
