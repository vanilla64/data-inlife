import axios from "axios"

export default axios.create({
  baseURL: 'https://datainlife.ru/junior_task/get_products.php',
  responseType: 'json'
})
