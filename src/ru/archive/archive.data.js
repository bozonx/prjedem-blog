import path from 'path'
import { POSTS_DIR } from 'vitepress-sls-blog-tmpl/src/constants.js'
import { loadYears } from 'vitepress-sls-blog-tmpl/src/helpers/makeListParams.js'

const lang = 'ru'
const postsDirAbs = path.resolve(path.dirname(__filename), '../../', lang, POSTS_DIR)

export default {
  load() {
    const years = loadYears(postsDirAbs)

    return {
      years,
    }
  }
}


