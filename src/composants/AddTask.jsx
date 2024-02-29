import React from "react";

class AddTask extends React.Component{

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.ajouterTache(this.insertTache.value) //ajouter tache
        this.props.history.push('/') //redirection
    }

    render(){
        return(
            <>
                <section>
                    <h1 className="m-3">Nouvelle tâches</h1>
                    <div className="card mx-3">
                        <form className="card-body" onSubmit={(e)=>this.handleSubmit(e)}>
                            <div className="form-group">
                                <label form="taskName">Nom de la tâche</label>
                                <input type="text" className="form-control" name="taskName" id="taskName" required 
                                    ref={input => this.insertTache = input} //sert de reference pour l'input
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}

export default AddTask