import React from "react";
import Navbar from "./Navbar";
import ToDoList from "./ToDoList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddTask from "./AddTask";
import Donnee from "../Donnee";
import Fetching from "./fetching";

class App extends React.Component{

    state = {
      taches : [],
      fetching : true
    }

    onToggleCompleted = (idTache) => {
      let tacheUpdate = this.state.taches.find(tache => tache.id === idTache)
      tacheUpdate.completed = !tacheUpdate.completed

      this.setState((prevState) => (
        prevState.taches.map(tache => {
          return tache.id === idTache ? tacheUpdate : tache;
        })
      ))

    }

    ajouterTache = (nom) => {
      let nouvelletache = {
        id : 'nouvelle tache',
        name : nom,
        completed : false
      }

      this.setState(prevState =>({
        taches : [...prevState.taches,nouvelletache]
      }))

    }

    supprimerTache = () =>{
      this.setState(prevState => {
        let newState = prevState.taches.filter(tache => !tache.completed)
        return {
          taches : newState
        }
      })
    }

    componentDidMount = () => { //fonction appeler sur un composant créer et afficher.
      let delais = Math.floor(Math.random()*5000) //delais de chargement/facultatif
      setTimeout(() => {
        this.setState({
          fetching : false,
          taches : Donnee
        })
      }, delais)
    }

    render(){
      return (
        <section>
          
          {this.state.fetching==true? <Fetching/>:null}
          
          <BrowserRouter>
              <Switch>
                  <Route path="/addTask" render = {(props)=> <AddTask {...props} ajouterTache={this.ajouterTache}/>} />
                  <Route path="/:filter?" render= {(props) => <ToDoList {...props} taches={this.state.taches} onToggleCompleted={this.onToggleCompleted} />} />
              </Switch>
                   <Navbar supprimerTache={this.supprimerTache} />
          </BrowserRouter>

        </section>
      );
    }
}

export default App 