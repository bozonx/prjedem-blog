---
type: util
---

<script setup>
import PreviewList from 'vitepress-sls-blog-tmpl/src/components/list/PreviewList.vue'
import { useData } from 'vitepress'
import { data } from '../loadPosts.data.js'
import { commonParams } from '../../.vitepress/commonParams.js'

const { params, localeIndex } = useData()
const curPage = Number(params.value.page)
const sorted = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date))
</script>


# page {{curPage}}

<PreviewList
  :allData="sorted"
  :curPage="curPage"
  :perPage="commonParams.perPage"
  :paginationMaxItems="commonParams.paginationMaxItems"
  :paginationBaseUrl="`/${localeIndex}/recent`"
/>

