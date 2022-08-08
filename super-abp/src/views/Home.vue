<template>
  <Header />
  TODO:
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "../layouts/header/index.vue";
export default defineComponent({
  name: "Layout",
  components: { Header },
  setup(props, ctx) {},
});
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
