import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import io from 'socket.io-client';

class App extends React.Component {
  state = {
    users: [1,2,3]
  }
  componentDidMount(){
    this.updateUsers();
  }
  componentWillMount(){
    const socketIO = io('https://rocky-woodland-27637.herokuapp.com/');
    socketIO.emit('CREATE_USER',{user_name:"hoang_lam",password:"123"});
    socketIO.on('CREATED_USER', (result) => {
      if(result.success){
        this.updateUsers();
      }
    })
  }
  updateUsers = ()=>{
    axios.get('https://rocky-woodland-27637.herokuapp.com/users')
    .then(res=>{
      this.setState({users: res.data});
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Hello world</h1>
        <ul>
          {
            this.state.users.map((item,index) =><li key={index}>{item.user_name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
