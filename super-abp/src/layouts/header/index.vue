<template>
  <header id="header" :class="headerClassName">
    <a-row :style="{ flexFlow: 'nowrap', height: 64 }">
      <a-col v-bind="colProps[0]">
        <Logo />
      </a-col>
      <a-col v-bind="colProps[1]" class="menu-row">
        <SearchBox
          key="search"
          :responsive="responsive"
          @triggerFocus="onTriggerSearching"
        />
        <Menu :is-mobile="isMobile" />
      </a-col>
    </a-row>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
import { UnorderedListOutlined, CloseOutlined } from "@ant-design/icons-vue";
import SearchBox from "./SearchBox.vue";
import { GlobalConfig } from "../../App.vue";
import { GLOBAL_CONFIG } from "../../SymbolKey";
export default defineComponent({
  components: {
    Logo,
    Menu,
    UnorderedListOutlined,
    SearchBox,
    CloseOutlined,
  },
  setup() {
    const route = useRoute();
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const isHome = computed(() => {
      return ["", "index", "index-cn"].includes(route.path);
    });

    const menuVisible = ref(false);
    const colProps = isHome.value
      ? [{ flex: "none" }, { flex: "auto" }]
      : [
          {
            xxxl: 4,
            xxl: 4,
            xl: 5,
            lg: 6,
            md: 6,
            sm: 24,
            xs: 24,
          },
          {
            xxxl: 20,
            xxl: 20,
            xl: 19,
            lg: 18,
            md: 18,
            sm: 0,
            xs: 0,
          },
        ];
    const searching = ref(false);
    const onTriggerSearching = (value: boolean) => {
      searching.value = value;
    };
    return {
      isMobile: globalConfig?.isMobile,
      responsive: globalConfig?.responsive,
      headerClassName: {
        clearfix: true,
        "home-header": isHome.value,
      },
      menuVisible,
      colProps,
      onTriggerSearching,
    };
  },
});
</script>
<style lang="less" src="./index.less"></style>
<style scope>
.adblock-banner {
  position: relative;
  z-index: 100;
  min-width: 1000px;
  padding: 16px;
  line-height: 28px;
  color: #8590a6;
  text-align: center;
  background-color: #ebebeb;
}
.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
