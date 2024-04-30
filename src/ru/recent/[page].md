---
type: util
---

<script setup>
import RecentList from 'vitepress-sls-blog-tmpl/src/components/list/RecentList.vue'
import { useData } from 'vitepress'
import { data } from '../loadPosts.data.js'
import { commonParams } from '../../.vitepress/commonParams.js'

const { theme, params } = useData()

console.log(111, params)
</script>


# {{theme.t.allPosts}}

<RecentList
  :allData="data.posts"
  :curPage="params.page"
  :perPage="commonParams.perPage"
  :paginationMaxItems="commonParams.paginationMaxItems"
/>

