import express from 'express';
import config from 'config-lite';
const app = express();
app.get('/', function (req, res, next) {
  res.send('欢迎来到首页')
})
app.listen(config.port);