<template>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { animeService } from '../services/AnimeService.js'
import { onMounted } from 'vue';

export default {
  setup() {
    async function getAnime(){
      try {
      await animeService.getAnime()
      } catch (error) {
      logger.error(error)
      Pop.error(error, "error")
      }
    }
    onMounted(()=>{
      getAnime()
    })
    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
