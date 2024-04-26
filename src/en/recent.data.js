// import fs from 'fs'
// import { DEFAULT_ENCODE } from '../.vitepress/constants.js'
//
//
// export default {
//   watch: ['./*/*.md'],
//   async load(watchedFiles) {
//     const filesContent = watchedFiles.map((item) => {
//       return fs.readFileSync(item, DEFAULT_ENCODE)
//     })
//     
//     console.log(111, filesContent)
//
//     return {
//       hello: 'world'
//     }
//   }
// }
//
//

import { createContentLoader } from 'vitepress'
import { parsePostItem } from 'vitepress-sls-blog-tmpl/src/helpers.js'


export default createContentLoader('ru/*/*.md', {
  includeSrc: true, // include raw markdown source?
  //render: true,     // include rendered full page HTML?
  //excerpt: true,    // include excerpt?
  transform(rawData) {

    // map, sort, or filter the raw data as you wish.
    // the final result is what will be shipped to the client.
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((rawPost) => parsePostItem(rawPost))
  }
})

