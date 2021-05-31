<template>
  <div :class="'main-block'">
    <div :class="'menu-block'">

      <ItemCheckedList v-for="genre in genres" :key="genre.id" :item="genre" v-model="selected"></ItemCheckedList>
    </div>
    <div :class="'content-block'">
      <Table :items="items" :fields="fields"></Table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import Field from '@/models/Field'
import Movie from '@/models/Movie'
import { movieService } from '@/services/MovieService'
import Table from '@/components/Table.vue'
import Genre from '@/models/Genre'
import ItemCheckedList from '@/components/ItemCheckedList.vue'

@Component({
  components: { ItemCheckedList, Table }
})
export default class BaseOfMovies extends Vue {
        items: Movie[] = []
        genres: Genre[] = []
        selected: Genre[] = []
        fields = [
          new Field<Movie>('backdrop_path', false, '', null, 'https://image.tmdb.org/t/p/w500'),
          new Field<Movie>('title', true, 'Название фильма', null, null)
        ]

        selectMoviesGenres = (newValue: Genre): void => {
          console.log('selectMoviesGenres', newValue)
        }

        @Watch('selected')
        async onPropertyChanged (value: string, oldValue: string): Promise<Movie[]> {
          let with_genres = ''
          for (const v of value) {
            if (v !== value[value.length - 1]) {
              with_genres += v + ','
            } else {
              with_genres += v
            }
          }
          const movies = await movieService.getList<Movie>(undefined, undefined, with_genres)
          this.items = movies ? movies.results : []
          return new Promise(() => movies)
        }

        async mounted (): Promise<Movie[]> {
          const movies = await movieService.getList<Movie>()
          this.items = movies ? movies.results : []
          const genres = await movieService.getGenres<Genre>()
          this.genres = genres ? genres.genres : []
          return new Promise(() => movies)
        }
}
</script>

<style lang="scss">
  .main-block {
    background-color: darkgray;
    display: flex;
    flex-direction: row;
    width: 98vw;
    height: 100vh;
    border-radius: 10px;
    padding-top: 60px;
    margin: 0 auto;
    .menu-block {
      width: 150px;
      height: 100%;
    }
    .content-block {
      width: calc(100% - 160px);
      height: 100%;
      overflow-x: auto;
    }
  }

</style>
