import React from "react";

class ToDo extends React.Component{

    state = {
        completed : this.props.tache.completed //{true and false}
    }

    toggleCompleted = () =>{
        this.setState(function (prevState) {
                return ({
                    completed: !prevState.completed
                });
            })

        this.props.onToggleCompleted(this.props.tache.id) //fonction rendre les taches selectionner persistant
    }

    render(){
        return (
            <li className={'list-group-item d-flex align-items-center ' + (this.state.completed?'bg-success':null)}>
                {this.props.tache.name}
                <button className={'btn btn-sm btn-outline-success ml-5' + (this.state.completed?'btn-success':'btn-outline-success')} 
                onClick={() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )
    }
    
}

export default ToDo;