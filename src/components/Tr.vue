<template>
  <tr :class="'row-el'">
    <td v-for="field in fields" :key="field.label" :class="'fields'">
      <TrContent :image="field.url" :text="( field.url ? field.url : '') + influencer[field.label] + ' ' + ( field.unit ? field.unit : '' )"></TrContent>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Field from '@/models/Field'
import TrContent from '@/components/TrContent.vue'

@Component({
  components: {
    TrContent
  }
})
export default class Tr extends Vue {
  @Prop() private influencer!: unknown;
  @Prop() private fields!: Array<Field<unknown>>;
}
</script>

<style lang="scss">
  .row-el {
    .fields {
      padding: 5px;
    }
  }

</style>
