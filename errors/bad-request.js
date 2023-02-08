const { StatusCodes } = require('http-status-codes');
const InternalAPIError = require('./internal-api');

class BadRequestError extends InternalAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
