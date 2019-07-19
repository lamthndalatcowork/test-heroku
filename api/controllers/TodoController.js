const tableName = 'todos';
const qb = require('./BaseController');
const BaseModel = require('./../models/BaseModel');
module.exports = {
    getAllTodo: async(req,res)=>{
        let base = new BaseModel(tableName);
        let data = await base.getAll();
        res.json(data);
    },
    getById: (req,res)=>{
        qb.select('*').where('id',req.params.id).get(tableName,(err,response)=>{
            if (err) throw err;
            res.json(response);
        })
    },
    postAddTodo: (req,res)=>{
        qb.insert(tableName,req.body,(err,response)=>{
            if (err) throw err;
            res.json({success:true});
        })
    } ,
    putUpdatesTodo: (req,res) =>{
        qb.update(tableName,req.body,{id:req.params.id},(err,response)=>{
            if (err) throw err;
            res.json({success:true});
        })
    },
    deleteTodo: (req,res)=>{
        qb.delete(tableName,{id:req.params.id},(err,response)=>{
            if (err) throw err;
            res.json({success:true});
        })
    },

};