class InternalAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = InternalAPIError;