import React from 'react';
import ToDoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'

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
    list
    };
  }
toggleItem= id =>{
const newList=this.state.list.map(item =>{
if (item.id===id){
  item.completed=!item.completed;

  return item;
}else{
  return item;
}
});
// console.log(newList)
this.setState({list:newList})
};


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
  clearCompleted = event =>{
    event.preventDefault();
    this.setState({
      list: this.state.list.filter((item) => !item.completed)
    })
  }
  render() {
    return (
      <div className='container'>
        <h1>Todo list:</h1>
        <ToDoList list ={this.state.list}toggleItem={this.toggleItem}/>
        <ToDoForm task={this.state.task}
        handleChanges={this.handleChanges}
        updateList={this.updateList} clearCompleted={this.clearCompleted}
         />
      </div>
    );
  }
}

export default App;
