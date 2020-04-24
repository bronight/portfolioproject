import React, {Component} from "react";


 export default class TodoList extends Component {
     constructor(props){
         super(props)
         this.state={
             newItem:"",
             list: []
         }
     }

     updateInput(key, value){
        this.setState({
            [key]: value
        })
     }

     addItem(){
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        } 

        if (newItem.value) {
            const list = [...this.state.list, newItem]
        
            this.setState({
                list,
                newItem:""
            })
        }
     }

     deleteItem(id){
        const list = [...this.state.list]
        const updatedList = list.filter(item => item.id !== id)

        this.setState({
            list: updatedList
        })
     }

    render() {
        return (
            <div className="todolist">
                <div>
                    <h2>To-do list</h2>
                <br/>
                <input 
                type="text"
                placeholder="New task..."
                value={this.state.newItem}
                onChange={el => this.updateInput("newItem", el.target.value)}
                />
                    <button onClick={() => this.addItem()}>
                        Add to list
                    </button>
                    <br/>
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li key={item.id}>
                                    {item.value}
                                    <button 
                                    onClick={() => this.deleteItem(item.id)}
                                    >x</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }  
  }