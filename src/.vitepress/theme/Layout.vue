<script setup>
import Theme from "vitepress-sls-blog-tmpl";
// import SideBarTags from "vitepress-sls-blog-tmpl/src/components/list/SideBarTags.vue";
import { useData } from "vitepress";

const { theme } = useData();
const { Layout } = Theme;
// const allPosts = page.value.previewItems;
</script>

<template>
  <Layout>
    <template #sidebar-logo>
      <img src="/img/sidebar-logo.webp" :alt="theme.siteLogoAlt" />
    </template>
    <!-- <template #sidebar-middle> -->
    <!--   <SideBarTags :allPosts="allPosts" /> -->
    <!-- </template> -->
  </Layout>
</template>
