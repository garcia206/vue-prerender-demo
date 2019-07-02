import axios from "axios";


export default {
  async getDog() {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      return response.data;
    } catch (error) {
      return error
    }
  }
}
