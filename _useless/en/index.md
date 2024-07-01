---
type: util
---

<script setup>
import HomePageRecent from 'vitepress-sls-blog-tmpl/src/components/list/HomePageRecent.vue'
import { useData } from 'vitepress'
import { data } from './loadPosts.data.js'
import { commonParams } from '../.vitepress/themeLocaleconfig.js'

//const { theme } = useData()
</script>


about project

## Last posts

<HomePageRecent
  :allData="data.posts"
  :perPage="commonParams.perPage"
/>

