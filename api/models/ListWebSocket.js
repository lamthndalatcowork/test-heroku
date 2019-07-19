class ListWebSocket {
    constructor() {
        this.listSocket = [];
    }

    /**
     *
     * @param socketItem
     */
    add(socketItem){
        this.listSocket.push(socketItem)
    }

    /**
     *
     * @param id
     */
    remove(id){
        let newList = this.listSocket.filter(socketItem=>{
            return socketItem.id !== id;
        });
        this.listSocket = newList;
    }

    /**
     *
     * @param data
     */
    sendAll(data){
        this.listSocket.forEach(socketItem=>{
            socketItem.webSocket.send(data);
        })
    }

    /**
     *
     * @param type
     * @param data
     */
    sendByType(type,data){
        this.listSocket.forEach(socketItem=>{
            if(socketItem.type === type )
                socketItem.webSocket.send(data);
        })
    }
    /**
     *
     * @param id
     * @param data
     */
    sendById(id,data){
        this.listSocket.forEach(socketITem=>{
            if(socketITem.id ===id){
                socketITem.send(data);
            }
        })
    }

    /**
     *
     * @param id
     * @returns {boolean}
     * @constructor
     */
    isExist(id){
        if(this.listSocket.length === 0){
            return false;
        }
        else if(this.listSocket.find(socketItem=>{
            return socketItem.id === id;
        })){
            return true;
        }
        return false;
    }

}

module.exports = ListWebSocket;