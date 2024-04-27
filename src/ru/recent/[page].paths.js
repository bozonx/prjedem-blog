import path from 'path'
import { POSTS_DIR } from 'vitepress-sls-blog-tmpl/src/constants.js'
import { makeRecentParams } from 'vitepress-sls-blog-tmpl/src/helpers/makeListParams.js'
import { commonParams } from '../../.vitepress/commonParams.js'


const lang = 'ru'
const postsDirAbs = path.resolve(path.dirname(__filename), '../../', lang, POSTS_DIR)


export default {
  paths() {
    return makeRecentParams(postsDirAbs, commonParams.perPage)
  }
}

