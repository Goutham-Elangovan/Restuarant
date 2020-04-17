import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer nBO6LX39RyVIesj4-Kk7ItQ6trDEgGNT31fYV4BzQcXMlI6uQDh46otgSPzvhP7QYs7uEZ1BIYaMO6Q3tMzXFb4Hj36XCpcdHNNGsEdaqHsF9jNFU-cnZXlOMwOUXnYx",
  },
});
