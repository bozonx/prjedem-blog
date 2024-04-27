<script setup>
import Theme from 'vitepress-sls-blog-tmpl'
import SideBarTags from 'vitepress-sls-blog-tmpl/src/components/list/SideBarTags.vue'

const { Layout } = Theme
</script>

<template>
  <Layout>
    <template #sidebar-middle>
      <SideBarTags />
    </template>
  </Layout>
</template>

