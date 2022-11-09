const security = require('./security')
const styleGuide = require('./style_guide')
const bestPractice = require('./best_practice')
const misc = require('./misc')

module.exports = {
  rules: {
    ...security.rules,
    ...styleGuide.rules,
    ...bestPractice.rules,
    ...misc.rules,
  },
}
