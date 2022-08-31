<template>
  <Header />
  <div>
    <div class="home">
      <div class="hero">
        <h1 id="main-title">SuperAbp</h1>
        <p class="description">一个可以让你更简单使用Abp的组织。</p>
      </div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card hoverable :bordered="false">
            <a-card-meta title="代码生成器">
              <template #description>
                简单快速的代码生成工具，与Visual Studio的完美结合。
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable :bordered="false">
            <a-card-meta title="开源模块">
              <template #description>
                提供了大量开箱即用的模块，可帮助开发人员快速构建应用程序。
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable :bordered="false">
            <a-card-meta title="MIT License">
              <template #description>
                SuperAbp使用MIT许可证，因此您可以将我们的模块用于商业目的。
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
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
<style lang="less" src="./Home.less" />
