---
type: util
---

<script setup>
import { data } from '../loadPosts.data.js'
import { useData } from 'vitepress'

const { params } = useData()
const year = params.value.year
const filtered = data.posts.filter((item) => {
  return Number(year) === new Date(item.date).getFullYear()
})
const sorted = filtered.sort((a, b) => {
  return new Date(b.date) - new Date(a.date)
})
</script>

# {{year}} Год

<ul>
<li v-for="item of sorted"><a :href="`${item.url}`">{{item.title}}</a></li>
</ul>

