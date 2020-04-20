import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (firstTimeSearchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: "50",
          userInput: firstTimeSearchTerm,
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
    searchApi("pasta");
  }, []);

  return [searchApi, errorMessage, results];
};
