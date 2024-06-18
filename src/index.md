<script setup>
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { site } = useData()
const langindexes = Object.keys(site.value.locales)
  .filter((item) => item !== 'root')

watchEffect(() => {
  if (inBrowser && window.location.pathname === '/') {
    const langToRedirect = (langindexes.includes(navigator.language))
      ? navigator.language
      : 'en'

    window.location.replace('/' + langToRedirect + '/');
  }
})
</script>

<!-- <script> -->
<!--   if (window.netlifyIdentity) { -->
<!--     window.netlifyIdentity.on('init', user => { -->
<!--       if (!user) { -->
<!--         window.netlifyIdentity.on('login', () => { -->
<!--           document.location.href = '/admin/'; -->
<!--         }); -->
<!--       } -->
<!--     }); -->
<!--   } -->
<!-- </script> -->
