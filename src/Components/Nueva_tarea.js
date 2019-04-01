import React, { Component } from 'react';

class Nueva_tarea extends Component {
    render() {
        const sty_buttons = {
            'margin-right': '10px' 
        }; 
        return (
            <div className="level">
                <form>
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary" type="text" placeholder="Nueva tarea" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary" type="text" placeholder="Persona" />
                        </div>
                    </div>
                    <div className="select">
                    <select>
                        <option>Prioridad</option>
                        <option>With options</option>
                    </select>
                    </div>
                    <hr></hr>
                    <a className="button is-primary" style={sty_buttons}>Guardar</a>
                    <a className="button">Borrar</a>
                </form>
            </div>
        )
    }
}

export default Nueva_tarea; 