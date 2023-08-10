/**
 * @fileoverview test
 * @author af
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: requireIndex(__dirname + '/rules'),
  configs: {
    recommended: {
      plugins: ['aflint'],
      rules: {
        'aflint/no-var': ['error'],
      },
    },
  },
}
