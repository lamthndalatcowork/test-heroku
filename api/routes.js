const userController = require('./controllers/UserController');
const loginMiddleware = require('./LoginMiddleware');
module.exports = app =>{
    app.route('/users')
    .get(loginMiddleware,userController.getAllUser)
    .post(userController.postAddUser)
    app.route('/users/:id')
    .get(userController.getUser)
    .put(userController.putUpdateUser)
    .delete(userController.deleteUser)
}