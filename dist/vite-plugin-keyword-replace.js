'use strict';

function viteKeywordsReplace(keywords, replaceMent) {
  return {
    name: 'vite-plugin-keywords-replace',
    transform(code, id) {
      if (id.match('HelloWorld.vue')) {
        return code.replace('好啊好啊', '****')
      }
    }
  }
}

module.exports = viteKeywordsReplace;
