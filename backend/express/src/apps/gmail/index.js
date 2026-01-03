const defineApp = require('../../helpers/define-app');
const addAuthHeader = require('./common/add-auth-header');
const auth = require('./auth/index');

module.exports = defineApp({
  name: 'Gmail',
  key: 'gmail',
  baseUrl: 'https://mail.google.com',
  apiBaseUrl: 'https://gmail.googleapis.com',
  primaryColor: '#ea4335',
  supportsConnections: true,
  beforeRequest: [addAuthHeader],
  auth,
  triggers: {},
  actions: {},
});
