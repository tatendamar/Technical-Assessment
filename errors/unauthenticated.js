const { StatusCodes } = require('http-status-codes');
const InternalAPIError = require('./internal-api');

class UnauthenticatedError extends InternalAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
