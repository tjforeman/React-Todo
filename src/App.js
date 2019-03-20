import React from 'react';
import ToDoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'

const list = [
  {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
    list:list,
    task:'',
    completed:''
    }
  }
  handleChanges = event => {
    console.log("event: ", event.target);
    this.setState({ 
      task: event.target.value
    });
  };
  updateList = event =>{
    event.preventDefault();
    const newToDo={
      task:this.state.task,
      id:Date.now(),
      completed:false
    }
    this.setState({
      list:[...this.state.list,newToDo]
    })
  }
  render() {
    return (
      <div>
        <h1>Todo list:</h1>
        <ToDoList list={this.state.list}/>
        <ToDoForm task={this.state.task}
        handleChanges={this.handleChanges}
        updateList={this.updateList}
         />
      </div>
    );
  }
}

export default App;
