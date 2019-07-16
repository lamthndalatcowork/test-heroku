$(function () {
    "use strict";
    var messageBox = $("#html-message");
    var buttonClick = $("#html-btn");
    
    var connection = new WebSocket('ws://localhost:5000/');

    connection.onopen = function () {
        alert("connected to websocket")
    };

    connection.onerror = function (error) {
        alert("connected error to websocket")
    };

    connection.onmessage = function (message) {

        // try {
        //     var json = JSON.parse(message.data);
        // } catch (e) {
        //     console.log('This doesn\'t look like a valid JSON: ', message.data);
        //     return;
        // }
        console.log(message.data);
        // messageBox.text(JSON.parse(message.data).content);
    };

    buttonClick.click(function (e) { 

        connection.send(JSON.stringify({type:"get-users"}));
    });

    /**
     * This method is optional. If the server wasn't able to respond to the
     * in 3 seconds then show some error message to notify the user that
     * something is wrong.
     */
    setInterval(function() {
        if (connection.readyState !== 1) {
            $('error').text("some thing wrong with server")
        }
    }, 3000); 

});