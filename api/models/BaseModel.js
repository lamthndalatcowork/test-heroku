const QueryBuilder = require('node-querybuilder');
const db = require('./../../configs/db');
const qb = new QueryBuilder(db.settingsConnect, 'mysql', 'single');
class BaseModel {
    constructor (tableName) {
        this.tableName = tableName;
    }
    getData(){
        return new Promise((resolve,reject)=>{
            qb.get("users",(err,response)=>{
                if (err) throw reject (err);
                resolve(response); 
            })
        })
    }
    async getAll(){
        let data = await this.getData();
        return data;
    }
}

module.exports = BaseModel