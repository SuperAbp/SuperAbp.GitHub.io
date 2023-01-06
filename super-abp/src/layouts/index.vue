<template>
  <Header />
  <div class="main-wrapper">
    <a-row>
      <a-col
        :xxxl="4"
        :xxl="4"
        :xl="5"
        :lg="6"
        :md="6"
        :sm="24"
        :xs="24"
        class="main-menu"
      >
        <a-affix>
          <section class="main-menu-inner">
            <!-- <Sponsors :is-c-n="isZhCN" /> -->
            <div>
              <surelyVueVue />
            </div>
            <Menu :menus="dataSource" :active-menu-item="activeMenuItem" />
          </section>
        </a-affix>
      </a-col>
      <a-col :xxxl="20" :xxl="20" :xl="19" :lg="18" :md="18" :sm="24" :xs="24">
        <section :class="mainContainerClass">
          <router-view></router-view>
        </section>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Header from "./header/index.vue";
import Menu from "./Menu.vue";
import useMenus from "../hooks/useMenus";

export default defineComponent({
  name: "Layout",
  components: { Header, Menu },
  setup(props, ctx) {
    const { menus, activeMenuItem, currentMenuIndex, dataSource } = useMenus();
    const mainContainerClass = computed(() => {
      return {
        "main-container": true,
        "main-container-component": false,
      };
    });
    return {
      menus,
      mainContainerClass,
      currentMenuIndex,
      activeMenuItem,
      dataSource,
    };
  },
});
</script>
