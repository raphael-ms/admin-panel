module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4200),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '93434575f92445145dd51085089c337d'),
    },
  },
});
