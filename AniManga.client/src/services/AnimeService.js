const { animeApi } = require("./AxiosService.js");

class AnimeService{


    async getAnime(){
    const res = await animeApi.get("&key=b0483a485fmshf245008a21044c4p16a21ejsn1f708d19bf89")
    console.log(res.data)
    }
}

export const animeService = new AnimeService()




