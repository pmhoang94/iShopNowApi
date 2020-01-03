const firebase = require('firebase-admin')
module.exports = {
  friendlyName: 'Get all',

  description: '',

  inputs: {},

  exits: {},

  fn: async function(inputs) {
    // Get all users.
    var allUsers = await listAllUsers()
    // TODO

    // Send back the result through the success exit.
    return exits.success(allUsers)
  }
}

async function listAllUsers(nextPageToken) {
  var users = []
  // List batch of users, 1000 at a time.
  await firebase
    .auth()
    .listUsers(1000, nextPageToken)
    .then(async function(listUsersResult) {
      listUsersResult.users.forEach(async function(userRecord) {
        var user = userRecord.toJSON()
        if (user.emailVerified && user.email.indexOf(`@${sails.config.custom.domain}`) != -1) users.push(user)
      })
      if (listUsersResult.pageToken) {
        // List next batch of users.
        await listAllUsers(listUsersResult.pageToken)
      }
    })
    .catch(function(error) {
      console.log('Error listing users:', error)
    })
  return users
}

