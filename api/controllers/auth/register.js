const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {
  friendlyName: 'Register',

  description: 'Register user.',

  inputs: {
    username: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true }
  },

  exits: {},

  fn: async function(inputs, exits) {
    inputs.passwordHash = bcrypt.hashSync(inputs.password, saltRounds);
    inputs.createdBy = 'system'
    let user = await User.create(inputs).fetch()
    return exits.success(user)
  }
}
