---
type: util
---

<script setup>
import TagPostsList from 'vitepress-sls-blog-tmpl/src/components/list/TagPostsList.vue'
import { useData } from 'vitepress'
import { data } from '../../loadPosts.data.js'
import { commonParams } from '../../../.vitepress/commonParams.js'

const { theme, params } = useData()
</script>


# {{theme.t.tagPageHeader}}: {{params.tag}}

<TagPostsList
  :allData="data.posts"
  :curPage="params.page"
  :perPage="commonParams.perPage"
  :paginationMaxItems="commonParams.paginationMaxItems"
  :tagName="params.tag"
  :tagSlug="params.name"
/>

