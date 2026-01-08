module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost', 'http://localhost:*', 'http://127.0.0.1:*'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
};