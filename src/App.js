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
        return item.action === this.state.newItemText})){
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

  toggleTodo = (todo) => this.setState({todoItems: this.state.todoItems.map(item => item.action === todo.action?{...item, done:!item.done}:item)

  })

  todoTableRows =() =>
     
     this.state.todoItems.map((item) => 
       
      <tr key={item.action} onClick={()=> this.toggleTodo(item)}>
                <td>{item.action}</td>
               
                <td>
               
                  <input type="checkbox" id={item.action} checked={item.done} onChange={()=> this.toggleTodo(item)}/>
                  
                </td>
                
       </tr> 
               
          
     ) 
/*
     todoTableRowsV2 =() =>{
       
     
     return this.state.todoItems.map((item) =>{
       return (<tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" checked={item.done} onChange={()=> this.toggleTodo(item)}/>
        </td>
        </tr> )})
        
        
   
     }*/
  
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
           <table className="table table-striped table-bordered">
               <thead>
                  <tr>
                    <th>Description</th>
                    <th>Done</th>
                  </tr>
               </thead>
               <tbody>
                  {this.todoTableRows()}
               </tbody>
           </table>
      </div>
    </div>
  );
  }
}
export default App;
