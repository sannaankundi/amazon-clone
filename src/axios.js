import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-390c7.cloudfunctions.net/api", // Update to the correct API URL
});

export default instance;
