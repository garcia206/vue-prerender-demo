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
  async getStore({city = '', storeName = '' } = {}) {
    const normalisedName = storeName.replace('-', ' ');
    const normalisedCity = city.replace('-', ' ');

    const service = 'https://digcore-store-srvc-nonprod-blue.lllapi.vision/v1/stores'
    const fetchUrl = `${service}?filter=(country==us)%3B(city==${normalisedCity})%3B(name==${normalisedName})%3B&include=images,spaces,spaces.images&prerender001=prerender001`;

    try {
      const response = await axios.get(fetchUrl);
      return response.data;
    } catch (error) {
      return error
    }
  }
}
