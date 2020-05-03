import axios from "axios";
// creating an axios instance to our habit API baseURL. This instance will be utilized by API requests to the habit API.
export default axios.create({
  baseURL: "http://192.168.0.9:5000/",

});
