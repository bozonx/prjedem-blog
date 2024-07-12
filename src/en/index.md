---
layout: util
---

<script setup>
import HomePageRecent from 'vitepress-sls-blog-tmpl/src/components/home/HomePageRecent.vue'
import HomePageTags from 'vitepress-sls-blog-tmpl/src/components/home/HomePageTags.vue'
import HomeHero from 'vitepress-sls-blog-tmpl/src/components/home/HomeHero.vue'
import UtilPageContent from 'vitepress-sls-blog-tmpl/src/components/UtilPageContent.vue'
import { useData } from 'vitepress'
import { data } from './loadPosts.data.js'
import { PROPS } from "../.vitepress/props.js";

const { theme } = useData()
</script>

<HomeHero :firstLine="theme.t.heroFirstLine" :secondLine="theme.t.heroSecondLine" />
<HomePageTags :header="theme.t.tags" :allData="data.posts" />
<HomePageRecent
  :header="theme.t.homeRecentHeader"
  :allData="data.posts"
  :perPage="PROPS.perPage"
/>

<!-- <UtilPageContent> -->
<!---->
<!-- ## header -->
<!---->
<!-- other text -->
<!---->
<!-- </UtilPageContent> -->
