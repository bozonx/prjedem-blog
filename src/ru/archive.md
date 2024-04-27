---
type: util
---

<script setup>
import { data } from './archive.data.js'
</script>

# archive

<pre>{{data}}</pre>

<ul>
<li v-for="year of data.years"><a :href="`/ru/archive/${year}`">{{year}}</a></li>
</ul>

