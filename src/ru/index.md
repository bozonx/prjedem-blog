---
type: util
---

<script setup>
import PreviewList from 'vitepress-sls-blog-tmpl/src/components/list/PreviewList.vue'
import { useData } from 'vitepress'
import { data } from './loadPosts.data.js'
import { commonParams } from '../.vitepress/commonParams.js'

const { theme, params, localeIndex } = useData()
const curPage = 1
const sorted = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date))
</script>



О проекте

## Последние записи

<PreviewList
  :allData="sorted"
  :curPage="curPage"
  :perPage="commonParams.perPage"
/>

<a href="/ru/recent/2">Далее</a>

