import React,{Component} from 'react'
import TodoContend from './TodoContend'
import TodoFrom from './TodoForm'
class TodoList extends Component{
    render(){
        return (
            <div>
            <h1>TO DO LIST React</h1>
            <TodoContend/>
            <TodoFrom/>
            </div>
            )
    }
}
export default TodoList