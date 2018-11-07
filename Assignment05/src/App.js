import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super()

    this.state= {
      todoList: [
        {
        name: 'munifa', 
        complete: false,
        id: 0
       }
      ]
   }
  }
    todoListUpdate = (task) => {
    this.setState({
        todoList: this.state.todoList.concat({
            name:task,
            complete: false,
            id: new Date().getTime()
        })
    })
    }
    todoListClear = () => {
      let notCompletedList = this.state.todoList.filter((notCompleted)=>{
        return notCompleted.complete === false
      })
      this.setState({
        todoList: notCompletedList
      })
    }

    render() {
    return (
      <div>
       <Body todoListUpdate={this.todoListUpdate} todoListClear={this.todoListClear}todoList={this.state.todoList}/>
      </div>
    );
  }

}

class Body extends Component {

  state = {
    task: ""
  }

  todoListAdd = (e) => {
    this.setState({
      task:e.target.value
    })
  }

  

render() {
  return (
     <div className="App">
      <div className="container">
        <h1 className="text-center">To Dos</h1>
        <form>
            <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={()=>this.props.todoListUpdate(this.state.task)} >Add</button>
                </span>
                <input className="form-control" placeholder="add a todo" name = 'task' onChange={this.todoListAdd}/>
             </div>
        </form>
        <ul className="list-group">
        <ListofTasks todoList={this.props.todoList} clickCheckbox={this.clickCheckbox}/>
        </ul>
        <select>
            <option value="all">all</option>
            <option value="active">active</option>
            <option value="complete">complete</option>
        </select>
         <button class="pull-right btn btn-default" type ='button'  onClick={this.props.todoListClear}>Clear Complete</button>
       </div>
    </div>
  )
}
}

class ListofTasks extends Component {

  clickCheckbox = (id) => {
    let tem = this.props.todoList
    for(let i=0; i<tem.length; i++){
      if(tem[i].id === id ){
      tem[i].complete = !tem[i].complete
    }
    }
    
    this.setState({
        todoList: tem
      })
    }
  render(){
    const output = this.props.todoList.map((todo, i) => {
      return <List todo={todo}  clickCheckbox={this.clickCheckbox}/>
    })
    return(
      <div>
      {output}
      </div>
    )
  }
}

class List extends Component {
  render(){
    return(
      <div>
        <li className="list-group-item">
        <input type="checkbox"  onChange= {()=>this.props.clickCheckbox(this.props.todo.id)} value={this.props.todo.complete}/>
        <label className={this.props.todo.complete ? 'done': ''} >{this.props.todo.name}</label>
        </li>
      </div>

    )
  }
}



export default App;
