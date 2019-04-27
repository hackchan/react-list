import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userName: 'Hackchan',
      todoItems:[{action: "buy Flowers", done:false},
                 {action: "Get Shoes", donde: false},
                 {action: "Collect Tickets", done:true},
                 {action: "Call Jose", done:false}],
      newItemText: ""           
    }
  }

  updateNewtextValue = (event) => {
    this.setState({newItemtext:event.target.value})
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Hackchan" ? "Fabio":"Hackchan"
    })
  }
  render = () => {
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
       {this.state.userName}'s To Do List
      </h4>
      <button onClick={this.changeStateData} className="btn btn-primary m-2">
       Change
      </button>
    </div>
  );
  }
}
export default App;
