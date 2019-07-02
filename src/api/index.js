import axios from "axios";


export default {
  async getDog() {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      return response.data;
    } catch (error) {
      return error
    }
  },
  async getStore() {
    try {
      const response = await axios.get('https://digcore-store-srvc-nonprod-blue.lllapi.vision/v1/stores/10311new');
      return response.data;
    } catch (error) {
      return error
    }
  }
}
