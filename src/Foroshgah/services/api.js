import axios from "axios";

const BASE_URL = "https://shoping-cart.iran.liara.run";

const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};


export { getProducts };
