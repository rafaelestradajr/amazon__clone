import axios from "axios";

const instance = axios.create({
  baseURL:'http://localhost:5001/clone-67f64/us-central1/api'

  //"https://us-central1-clone-67f64.cloudfunctions.net/api"
 // 
  //API (cloud function ) URL
});

export default instance;
