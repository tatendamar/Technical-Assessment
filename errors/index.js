const InternalAPIError = require('./internal-api')
const UnauthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not-found')
const BadRequestError = require('./bad-request')

module.exports = {
  InternalAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
}
