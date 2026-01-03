module.exports = {
  fields: [
    {
      key: 'oAuthRedirectUrl',
      label: 'OAuth Redirect URL',
      type: 'string',
      required: true,
      readOnly: true,
      value: '{WEB_APP_URL}/app/github/connections/add', 
      docUrl: 'https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps',
    },
    {
      key: 'consumerKey',
      label: 'Client ID',
      type: 'string',
      required: true,
    },
    {
      key: 'consumerSecret',
      label: 'Client Secret',
      type: 'string',
      required: true,
    },
  ],
};
