<template>
    <div :class="'check-item'">
      <input type="checkbox" :value="item.id" v-on:input="selected = item.id">
      {{item.name}}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
@Component
export default class ItemCheckedList extends Vue {
        @Prop() item!: unknown
        @Prop() selected!: unknown[]
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
