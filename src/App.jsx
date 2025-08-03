import React, { Component } from 'react';
import './App.css'
import Counters from './components/counters';
import NavBar from './components/navBar';

class App extends Component {
  state = {
 
        counters: [
            {id: 1, value: 4},
             {id: 2, value: 0},
              {id: 3, value: 0},
               {id: 4, value: 0},
        ]
     } 

// this handles the increment
     handleIncrement = (counter) => {
        // ... clones all the properties of the counters State
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})
     };

// handles delete button
handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({counters});
}

// handles decrement
handleDecrement = (counter) => {
        // ... clones all the properties of the counters State
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters})

};

// hadles reset
handleReset =() => {
    const counters = this.state.counters.map( c => {
        c.value = 0;
        return c;
    })

    this.setState ({counters});
}

render() { 

  return (
    <>
      <div>
        <NavBar 
        // only updates values greater than zero
        totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <Counters
        counters = {this.state.counters}
        onReset ={this.handleReset}
        onIncrement ={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete ={this.handleDelete}/>
      </div>
      
    </>
  )
} }

export default App
