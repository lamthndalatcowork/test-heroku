
const SocketItem = require('./../models/SocketItem');
const ListWebSocket = require('./../models/ListWebSocket');
const tableName = 'users';
const configDatabase = require('./../../configs/db');
const db = configDatabase.dbConnected;
const qb = require('./BaseController');
const BaseModel = require('./../models/BaseModel');
class SocketController{
    constructor() {
        this.listSocket = new ListWebSocket();
    }
    testSocket(){
        return (ws, req)=>{
            let id = req.params.id;
            if(this.listSocket.isExist(id)){
                ws.send(`socket với id ${id} đã tồn tại, vui lòng chọn id khác`);
                ws.on('close');
                return;
            }
            let type = "BASIC";
            let socketConnect = new SocketItem(id,type,ws);
            this.listSocket.add(socketConnect);
            ws.on('message', (msg)=>{
                this.listSocket.sendByType(type,`send form id: ${id}: ${msg}`)
            });
            ws.on('close',()=>{
                console.log("disconnect");
                this.listSocket.remove(id);
            })
        }
    }
    LoginUser(){
        return (ws, req)=>{

            let id = req.params.id;
            if(this.listSocket.isExist(id)){
                ws.send(`socket với id ${id} đã tồn tại, vui lòng chọn id khác`);
                ws.on('close');
                return;
            }

            let type = "BASIC";
            let socketConnect = new SocketItem(id,type,ws);
            this.listSocket.add(socketConnect);
            ws.on('message', (msg)=>{
                this.listSocket.sendByType(type,msg)
            });
            ws.on('close',()=>{
                console.log("disconnect");
                this.listSocket.remove(id);
            })
        }
    }
}
module.exports = new SocketController();

