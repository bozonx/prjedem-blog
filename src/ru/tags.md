---
type: util
---

<script setup>
import { data } from './loadPosts.data.js'
import AllTagsList from 'vitepress-sls-blog-tmpl/src/components/list/AllTagsList.vue'
</script>

# Tags 

<AllTagsList :allPosts="data.posts" />

