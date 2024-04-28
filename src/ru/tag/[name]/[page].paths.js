import path from 'path'
import { POSTS_DIR } from 'vitepress-sls-blog-tmpl/src/constants.js'
import { makeTagsParams } from 'vitepress-sls-blog-tmpl/src/helpers/makeListParams.js'
import { commonParams } from '../../../.vitepress/commonParams.js'


const lang = 'ru'
const postsDirAbs = path.resolve(path.dirname(__filename), '../../../', lang, POSTS_DIR)


export default {
  paths() {
    return makeTagsParams(postsDirAbs, commonParams.perPage, lang)
  }
}
