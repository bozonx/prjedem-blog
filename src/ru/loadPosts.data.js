import fs from 'fs'
import path from 'path'
import { parseMdFile } from 'vitepress-sls-blog-tmpl/src/helpers/parseMdFile.js'
import { POSTS_DIR, DEFAULT_ENCODE } from 'vitepress-sls-blog-tmpl/src/constants.js'

// TODO: язык можно брать из пути
const lang = 'ru'

export default {
  watch: [`./${POSTS_DIR}/*/*.md`],
  load(watchedFiles) {
    const posts = watchedFiles.map((item) => {
      const date = path.basename(path.dirname(item))
      // TODO: упростить
      const url = path.join('/', lang, POSTS_DIR, date, path.basename(item, '.md'))
      const rawContent = fs.readFileSync(item, DEFAULT_ENCODE)
      const { meta, title, preview } = parseMdFile(rawContent)

      return {
        url,
        date,
        title,
        preview,
        tags: meta.tags,
      }
    })

    return {
      posts
    }
  }
}

