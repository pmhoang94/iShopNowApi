const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports = {
  friendlyName: 'Login',

  description: 'Login auth.',

  inputs: {
    email: { type: 'string', required: true },
    password: { type: 'string', required: true }
  },

  exits: {},

  fn: async function(inputs, exits) {
    let user = await User.findOne({ email: inputs.email })
    let token = ''
    if (user) {
      let check = bcrypt.compareSync(inputs.password, user.passwordHash)
      if (check) {
        let data = _.omit(user, ['passwordHash'])
        token = jwt.sign(data, 'iShopNow')
      }
    }
    return exits.success({ token: token })
  }
}
