module.exports = [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'blog-admin-panel.s3.eu-west-2.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'blog-admin-panel.s3.eu-west-2.amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  }
];