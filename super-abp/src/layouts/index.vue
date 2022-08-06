<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./header/index.vue";

export default defineComponent({
  name: "Layout",
  components: { Header },
  setup(props, ctx) {},
});
</script>
