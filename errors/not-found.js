const { StatusCodes } = require('http-status-codes');
const InternalAPIError = require('./internal-api');

class NotFoundError extends InternalAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
