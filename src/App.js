import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
    state ={
        persons: [
          {id: '111', name: 'max', age: 28},
          {id: '222', name: 'mnu', age: 128},
          {id: '333', name: 'steve', age: 22}
        ],
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} )
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };


    render() {
        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );
        }


        return (
            <div className="App">
                <h1>Hi im a React App</h1>
                <p>This is real working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch name</button>
                {persons}
            </div>
        );
    }
}

export default App;
