const {createUser} = require("./socketEvents");
module.exports = socketIO => {
    socketIO.on("connection", socket => {
        console.log("user connected");
        createUser(socketIO, socket);
    });
};