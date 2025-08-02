import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {

    render() { 
    
        const {onReset, onIncrement, onDelete, counters} = this.props;
        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {/* list counter */}
{counters.map(counter => <Counter 
key={counter.id} 
onIncrement = {onIncrement}
onDelete = {onDelete}
// this carries all the data about counters 
counter = {counter}/>)}
            </div>
        );
    }
}
 
export default Counters;