const passport = require('passport')

const isAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err)
    if (info) {
      // Error related to the validity of the token (error in its signature, expired...)
      return res.status(401).json({
        error: 'Unauthorized. Token error'
        // error: info.message
      })
    }
    if (!user) {
      // Token is correctly signed but does not belong to an existing user
      return res.status(401).json({
        error: 'Unauthorized. User not found'
      })
    }
    req.user = user
    next()
  })(req, res, next)
}

const isAdmin = [
  isAuth,
  (req, res, next) => {
    if (req.user.roles.includes('admin')) {
      next()
    } else {
      return res.status(401).json({
        error: 'Unauthorized. You are not and admin'
      })
    }
  }
]

module.exports = {
  isAuth,
  isAdmin
}
