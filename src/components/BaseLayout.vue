<template>
    <div :class="'main-block'">
      <Table :items="items" :fields="fields"></Table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Table from '@/components/Table.vue'
import FieldService from '@/FieldService'
import Influencer from '@/models/Influencer'
import Field from '@/models/Field'
@Component({
  components: { Table }
})
export default class BaseLayout extends Vue {
    items: unknown[] = []
    fields = [
      new Field<Influencer>('name', false, 'Информация о инфлюенсере', null, null),
      new Field<Influencer>('followers', true, 'Количество подписчиков', null, null),
      new Field<Influencer>('er', true, 'Рейтинг увлеченности', '%', null)
    ]

    async mounted (): Promise<Influencer[]> {
      const fieldService = new FieldService()
      const influencers = await fieldService.getInfluencers()
      this.items = influencers
      return new Promise(() => influencers)
    }
}
</script>

<style lang="scss">
.main-block {
  background-color: darkgray;
  width: 98vw;
  height: 100vh;
  border-radius: 10px;
  padding-top: 60px;
  margin: 0 auto;
}
</style>
