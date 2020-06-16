import axios from "axios";

const BASEURL = "https://randomapi.com/";
const APIKEY = "&api_key=T8EV-J853-MI6L-MAFW";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};