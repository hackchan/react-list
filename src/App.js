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

  createNewTodo = () =>{
    
    if(!this.state.todoItems.find((item )=> {
        return item.action == this.state.newItemText})){
          this.setState({
             todoItems:[...this.state.todoItems,
              {action:this.state.newItemText, donde:false}],newItemText:""

          })
  
        }
    
    

 
  
  }

  updateNewTextValue = (event) => {
    console.log(event.target.value)
    this.setState({newItemText:event.target.value})
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
       ({this.state.todoItems.filter( t => !t.done).length} items to do)
      </h4>
      
      <div className="container-fluid">
           <div className="my-1">
               <input className="form-control"
                 value={this.state.newItemText}
                 onChange={this.updateNewTextValue}
                />
                 <button className="btn btn-primary mt-1" 
                 onClick={this.createNewTodo}>Add
                </button>       
           </div>
      </div>
    </div>
  );
  }
}
export default App;
