import React, { Component } from 'react';
import Nueva_tarea from './Nueva_tarea'; 

class Inicio extends Component {
    
    render() {
        console.log("Asdasdasd");
        return (
            <div className="container is-fluid">
            <br></br><br></br>
               <div className="columns">
               <div class="column">
                    <Nueva_tarea />
                </div>
                <div class="column">
                    Second column
                </div>
               </div>  
            </div>
        )
    }
}

export default Inicio;