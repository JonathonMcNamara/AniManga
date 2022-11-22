import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const animeApi = Axios.create({
  baseURL: "https://animes3.p.rapidapi.com/",
  timeout: 8000
})
