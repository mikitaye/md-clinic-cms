module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'), // Strapi Cloud sets this automatically
});