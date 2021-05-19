<template>
  <tr :class="'row-el'">
    <td v-for="field in fields" :key="field.label" :class="'fields'">{{influencer[field.label]}} {{field.unit ? field.unit : ''}}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Field from '@/models/Field'
import Influencer from '@/models/Influencer'

@Component
export default class Tr extends Vue {
  @Prop() private influencer!: unknown;
  @Prop() private fields!: Array<Field<Influencer>>;
}
</script>

<style lang="scss">
  .row-el {
    .fields {
      padding: 5px;
    }
  }

</style>
