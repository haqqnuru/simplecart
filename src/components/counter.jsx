import React, { Component } from 'react';



class Counter extends Component {
  
  render() { 
      return ( 
        <div>
             
            <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm' 
      onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
     
      <button className='btn btn-danger btn-sm'
      onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
</div>
        );
    }

    // applying classes dynamically
    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    // this formats count to 'zero' instead of '0'
    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "zero" : value;
    }
}
 
export default Counter;