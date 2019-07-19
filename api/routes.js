const userController = require('./controllers/UserController');
const todoController = require('./controllers/TodoController');
const SocketController = require('./controllers/SocketController');
const loginMiddleware = require('./LoginMiddleware');
module.exports = app => {
    app.route('/users')
        .get(userController.getAllUser)
        .post(userController.postAddUser);
    app.route('/users/:id')
        .get(userController.getUser)
        .put(userController.putUpdateUser)
        .delete(userController.deleteUser);
    app.route('/todos')
        .get(todoController.getAllTodo)
        .post(todoController.postAddTodo);
    app.route('/todos/:id')
        .get(todoController.getById)
        .put(todoController.putUpdatesTodo)
        .delete(todoController.deleteTodo);
    // app.ws('/rooms/:id',SocketController.testSocket());
};