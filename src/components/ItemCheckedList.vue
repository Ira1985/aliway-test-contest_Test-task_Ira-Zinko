<template>
    <div :class="'check-item'">
      <input type="checkbox" :value="item.id" @change="select">
      <label>{{item.name}}</label>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Emit, Vue } from 'vue-property-decorator'
@Component
export default class ItemCheckedList extends Vue {
        @Prop() item!: unknown
        @Prop() selected!: unknown[]
        @Model('change', { type: Array }) changedGenres!: unknown[]
        @Emit('change')
        select (v: any) {
          if (v.target.checked) {
            this.changedGenres.push(v.target.value)
          } else {
            this.changedGenres.splice(this.changedGenres.indexOf(v.target.value), 1)
          }
          return this.changedGenres
        }
}
</script>

<style lang="scss">
  .check-item {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    input {
      margin-right: 10px;
    }
  }

</style>
