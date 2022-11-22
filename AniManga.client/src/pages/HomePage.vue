<template>

.<div class="container">
  <div class="row">
    <div class="col-3" v-for="a in anime" :key="a.id">
      <AnimeCard :anime="a"/>
    </div>
  </div>
</div>


</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { animeService } from '../services/AnimeService.js'
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import AnimeCard from '../components/AnimeCard.vue';


export default {
    setup() {
        async function getAnime() {
            try {
                await animeService.getAnime();
            }
            catch (error) {
                logger.error(error);
                Pop.error(error, "error");
            }
        }
        onMounted(() => {
            getAnime();
        });
        return {
            anime: computed(() => AppState.anime)
        };
    },
    components: { AnimeCard }
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
