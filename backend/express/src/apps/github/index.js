const defineApp = require('../../helpers/define-app');
const addAuthHeader = require('./common/add-auth-header');
const auth = require('./auth/index');

module.exports = defineApp({
  name: 'GitHub',
  key: 'github',
  baseUrl: 'https://github.com',
  apiBaseUrl: 'https://api.github.com',
  primaryColor: '#000000',
  supportsConnections: true,
  beforeRequest: [addAuthHeader],
  auth,
  triggers: {}, 
  actions: {}, 
});
