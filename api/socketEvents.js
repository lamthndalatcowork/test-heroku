const qb = require('./controllers/BaseController');
module.exports =  {
    createUser: (socketIO, socket) => {
        socket.on('CREATE_USER', (data) => {
            if(data.user_name && data.password){
                qb.insert('users',data, (err) => {
                    if (err){
                        socketIO.sockets.emit("CREATED_USER", {success: false});
                    }
                    socketIO.sockets.emit("CREATED_USER", {success: true});
                });
            }
            else{
                socketIO.sockets.emit("CREATED_USER", {success: false});
            }

        });
    }
};