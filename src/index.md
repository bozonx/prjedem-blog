<script setup>
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { lang } = useData()

watchEffect(() => {
  if (inBrowser) {
    window.location.replace('/' + navigator.language + '/');
  }
})
</script>

