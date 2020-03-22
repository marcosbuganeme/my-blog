/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'lazysizes'
require("prismjs/themes/prism-tomorrow.css")

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    offset: 66
  })
}