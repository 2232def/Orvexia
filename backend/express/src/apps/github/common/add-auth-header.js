module.exports = (context, requestConfig) => {
  if (requestConfig.headers && context.auth.data && context.auth.data.accessToken) {
    requestConfig.headers.Authorization = `Bearer ${context.auth.data.accessToken}`;
  }
  return requestConfig;
};
