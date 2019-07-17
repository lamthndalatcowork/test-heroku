const userController = require('./controllers/UserController');
const SocketController = require('./controllers/SocketController');
const loginMiddleware = require('./LoginMiddleware');
module.exports = app =>{
    app.route('/users')
    .get(userController.getAllUser)
    .post(userController.postAddUser);
    app.route('/users/:id')
    .get(userController.getUser)
    .put(userController.putUpdateUser)
    .delete(userController.deleteUser);
    app.ws('/rooms/:id',SocketController.testSocket());
};