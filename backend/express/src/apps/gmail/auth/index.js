module.exports = {
  fields: [
    {
      key: 'oAuthRedirectUrl',
      label: 'OAuth Redirect URL',
      type: 'string',
      required: true,
      readOnly: true,
      value: '{WEB_APP_URL}/app/gmail/connections/add', 
      docUrl: 'https://developers.google.com/gmail/api/guides/auth',
    },
    {
      key: 'clientId',
      label: 'Client ID',
      type: 'string',
      required: true,
    },
    {
      key: 'clientSecret',
      label: 'Client Secret',
      type: 'string',
      required: true,
    },
  ],
};
