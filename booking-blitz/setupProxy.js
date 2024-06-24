// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// const app = express();
//
// // module.exports = function(app) {
// //   app.use(
// //     '/api',
// //     createProxyMiddleware({
// //       target: 'https://blitzykt.ru',
// //       changeOrigin: true,
// //     })
// //   );
// // };
//
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})