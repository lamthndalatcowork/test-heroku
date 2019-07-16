const tableName = 'users';
const configDatabase = require('./../../configs/db');
const db = configDatabase.dbConnected;
const qb = require('./BaseController');
const BaseModel = require('./../models/BaseModel');
module.exports = {
    getAllUser: async(req,res)=>{
        // let user = new User("sdf","dsf");
        let base = new BaseModel("users");
        let data = await base.getAll();
        res.json(data);
    },
    getUser: (req,res)=>{
        qb.select('*').where('id',req.params.id).get(tableName,(err,response)=>{
            if (err) throw err
            res.json(response);
        })
    },
    postAddUser: (req,res)=>{
        qb.insert(tableName,req.body,(err,response)=>{
            if (err) throw err
            res.json({success:true});
        })
    } ,
    putUpdateUser: (req,res) =>{
        qb.update(tableName,req.body,{id:req.params.id},(err,response)=>{
            if (err) throw err
            res.json({success:true});
        })
    },
    deleteUser: (req,res)=>{
        qb.delete(tableName,{id:req.params.id},(err,response)=>{
            if (err) throw err
            res.json({success:true});
        })
    },
    
}