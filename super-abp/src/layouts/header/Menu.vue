<template>
  <Navigation @langChange="onLangChange" />
  <template v-if="isMobile">
    <!-- <Ecosystem /> -->
  </template>
  <template v-else>
    <Github />
  </template>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Github from "./Github.vue";
import Navigation from "./Navigation.vue";
import { version } from "ant-design-vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "HeaderMenu",
  components: {
    Navigation,
    Github,
  },
  props: ["isMobile"],
  setup() {
    const antdVersion = ref(version);
    const route = useRoute();
    const onLangChange = () => {
      const {
        location: { pathname },
      } = window;
    };

    const changeVersion = () => {
      location.href = `https://1x.antdv.com${route.fullPath}`;
    };
    return {
      onLangChange,
      antdVersion,
      changeVersion,
    };
  },
});
</script>
<style lang="less" scoped></style>
