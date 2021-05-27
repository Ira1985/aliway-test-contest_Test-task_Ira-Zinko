<template>
  <img v-if="image" :src="text">
  <span v-else>{{text}}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TrContent extends Vue {
        @Prop() private image!: boolean;
        @Prop() private text!: string;
}
</script>

<style scoped>

</style>
