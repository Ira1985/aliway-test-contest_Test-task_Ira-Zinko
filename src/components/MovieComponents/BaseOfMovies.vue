<template>
  <div>
    <select v-model="selected" multiple>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
    </select>
    <p>Выбрано {{selected}}</p>
    <Table :items="items" :fields="fields"></Table>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import Field from '@/models/Field'
import Movie from '@/models/Movie'
import { movieService } from '@/services/MovieService'
import Table from '@/components/Table.vue'
import Genre from '@/models/Genre'

@Component({
  components: { Table }
})
export default class BaseOfMovies extends Vue {
        items: Movie[] = []
        genres: Genre[] = []
        selected: Genre[] = []
        fields = [
          new Field<Movie>('backdrop_path', false, '', null, 'https://image.tmdb.org/t/p/w500'),
          new Field<Movie>('title', true, 'Название фильма', null, null)
        ]

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

<style scoped>

</style>
