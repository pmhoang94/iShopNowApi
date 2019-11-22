module.exports = {
  friendlyName: 'Me',

  description: 'Me user.',

  inputs: {},

  exits: {
    error: {
      description: 'Unexpected error occurred.'
    },

    success: {
      description: 'Role was succesffuly fetched'
    }
  },

  fn: async function(inputs) {
    // All done.
    return {data: this.req.user}
  }
}
