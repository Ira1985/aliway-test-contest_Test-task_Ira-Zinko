<template>
  <div>
    <table :class="'table-block'">
      <tr>
        <th v-for="field in fields" :key="field.label" :class="'headers'">
          <span v-on:click="sortItems(field)">{{field.alias}}</span>
        </th>
      </tr>
      <Tr v-for="item in items" :key="item.id" :influencer="item" :fields="fields"></Tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Influencer from '@/models/Influencer'
import Tr from '@/components/Tr.vue'
import Field from '@/models/Field'

@Component({
  components: {
    Tr
  }
})
export default class Table extends Vue {
  @Prop() private items!: unknown[];
  @Prop() private fields!: Field<Influencer>[];

  sortItems = function<T> (this: Table, field: Field<T>): void {
    if (field.sortable) {
      const array = this.items as T[]
      if (field.sortBy === 'desc') {
        field.sortBy = 'asc'
        array.sort((a: T, b: T) => a[field.label] < b[field.label] ? 1 : -1)
      } else {
        field.sortBy = 'desc'
        array.sort((a: T, b: T) => a[field.label] > b[field.label] ? 1 : -1)
      }
    }
  }
}
</script>

<style lang="scss">
  .table-block {
    width: 96%;
    margin: 0 auto;
    .headers {
      padding: 10px;
    }
    .row-el:hover {
      background-color:#f5f5f5;
    }
  }
</style>
