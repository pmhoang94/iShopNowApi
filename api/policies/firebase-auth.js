const jwt = require('jsonwebtoken')
const firebase = require('firebase-admin')
const config = sails.config.custom.firebase

firebase.initializeApp({
  credential: firebase.credential.cert(config.credential),
  databaseURL: config.url
})

module.exports = async function(req, res, next) {
  let authorization = req.headers.authorization
  if (authorization) {
    let token = authorization ? authorization.replace('Bearer ', '') : ''
    let user = jwt.verify(token, 'iShopNow')
    req.user = user
    return next()
  }
  return res.sendStatus(401)
}
