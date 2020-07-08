// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(
        createProxyMiddleware(
            '/api',
            {  //`Api`是需要转发的请求
<<<<<<< HEAD
            target: 'http://172.16.6.138:8888',  // 这里是接口服务器地址
            // target: 'http://192.168.43.12:8888',
=======
            // target: 'http://172.16.6.131:8888',  // 这里是接口服务器地址
            //     target: 'http://172.16.6.26:8768',
                target: 'http://192.168.43.186:8888',
>>>>>>> f8172933e8437e13a4f15ff7109de73b8dad60ef
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        }),
    )
}
