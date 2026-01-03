const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const sendError = (res, message = 'Error', statusCode = 500, error = null) => {
  res.status(statusCode).json({
    success: false,
    message,
    error: error ? error.message || error : null,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
