import React from "react";
import ToDo from "./ToDo";

const todolist = ({ taches, match, onToggleCompleted }) => {

    let filtreTache;

    switch (match.params.filter){
        case 'completed':
            filtreTache = taches.filter((objetTache) => objetTache.completed)// seul les taches completer seront mis dans filtreTache
            break;
        default:
            filtreTache = taches
            break;
    }

    if(filtreTache.length === 0){
        return (
            <>
                <h1 className='m-3'> Liste des tâches </h1>
                <ul className='list-group m-3'>
    
                    <li className='list-group-item d-flex align-items-center'>
                          Aucune tâche à afficher.
                    </li>
    
                </ul>
            </>
        )
      
    } else{
        return (
            <>
                <h1 className='m-3'> Liste des tâches </h1>
                <ul className='list-group m-3'>
    
                    {
                        filtreTache.map((tache) => <ToDo tache={tache} key={tache.id} onToggleCompleted={onToggleCompleted}/>) //Recuperer les elements dans le Array du Donnee et les stockés dans "tache".
                    }
    
                </ul>
            </>
        );
    }
    

}

export default todolist