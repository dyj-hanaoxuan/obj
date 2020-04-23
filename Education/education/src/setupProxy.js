// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(
        createProxyMiddleware(
            '/api',
            {  //`Api`是需要转发的请求
            // target: 'http://172.16.8.28:8888',  // 这里是接口服务器地址
                target: 'http://192.168.43.186:8888',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    )
}
