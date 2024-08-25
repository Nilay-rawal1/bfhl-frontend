const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/bfhl', // API endpoint path
    createProxyMiddleware({
      target: 'https://bhfl-backend-nmr6.onrender.com', // Updated target server URL
      changeOrigin: true,
      pathRewrite: {
        '^/bfhl': '', // This will remove '/bfhl' from the URL before sending the request to the target
      },
    })
  );
};
