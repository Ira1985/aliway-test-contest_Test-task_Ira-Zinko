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
        @Model('change', { type: Array }) changedGenres!: unknown[]
        @Emit('change')
        select (v: any) {
          const arr = this.changedGenres
          if (v.target.checked) {
            arr.push(v.target.value)
          } else {
            arr.splice(arr.indexOf(v.target.value), 1)
          }
          return arr
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
