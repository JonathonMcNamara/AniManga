import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const animeApi = Axios.create({
  baseURL: "https://anime-db.p.rapidapi.com/anime",
  timeout: 8000
})
