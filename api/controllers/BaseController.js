const QueryBuilder = require('node-querybuilder');
const db = require('./../../configs/db');
const qb = new QueryBuilder(db.settingsConnect, 'mysql', 'single');
module.exports = qb;