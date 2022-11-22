import { animeApi } from "./AxiosService.js"

class AnimeService{
    async getAnime(){
    const res = await animeApi.get("?rapidapi-key=b0483a485fmshf245008a21044c4p16a21ejsn1f708d19bf89", {params:{
        page: 1,
        size: 20
    }})
    console.log(res.data)
    }
}

export const animeService = new AnimeService()




