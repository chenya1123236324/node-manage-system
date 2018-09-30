'use strict';

import mongoose from 'mongoose';
import config from 'config-lite';
mongoose.connect(config.url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open' ,() => {
	console.log('连接数据成功')
})

export default db;


