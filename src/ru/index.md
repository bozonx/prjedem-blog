---
layout: page
---

<script setup>
import HomePageRecent from 'vitepress-sls-blog-tmpl/src/components/home/HomePageRecent.vue'
import HomePageTags from 'vitepress-sls-blog-tmpl/src/components/home/HomePageTags.vue'
import HomeHero from 'vitepress-sls-blog-tmpl/src/components/home/HomeHero.vue'
import { useData } from 'vitepress'
import { data } from './loadPosts.data.js'
import { commonParams } from '../.vitepress/themeLocaleconfig.js'

const { theme } = useData()
</script>

<HomeHero :firstLine="theme.t.heroFirstLine" :secondLine="theme.t.heroSecondLine" />

## {{ theme.t.tags }}

<HomePageTags :allData="data.posts" />

## {{ theme.t.homeRecentHeader}}

<HomePageRecent
  :allData="data.posts"
  :perPage="commonParams.perPage"
/>
