<template>
  <section>
    ok ! 2545
    <a href="/index3">go</a>
    ok ! 2545
    <a href="/index3">go</a>
    ok ! 2545
    <a href="/index3">go</a>
    ok ! 2545
    <a href="/index3">go</a>
    ok ! 2545
    <a href="/index3">go</a>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State people: Person
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
