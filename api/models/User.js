const BaseModel = require ('./BaseModel');
class User extends BaseModel{
    constructor(){
        super("users");
        this.user_name = "";
        this.passwork = "";
        this.tableName = "users"
    }

} 

module.exports = User