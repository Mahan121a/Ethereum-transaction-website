const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use('/app', createProxyMiddleware({
    target: 'http://localhost:3333',
    changeOrigin:true
}))

app.listen(3000)