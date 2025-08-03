import React, { Component } from 'react';



class Counter extends Component {
  
  render() { 
      return ( 
        <div className='row'>
            <div className="col-1"> 
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                </div>

            <div className="col">
             
        <button className='btn btn-secondary btn-sm' 
      onClick={() => this.props.onIncrement(this.props.counter)}>+</button>

        <button className='btn btn-secondary btn-sm m-2' 
        // condition to disable if set to zero
        disabled= {this.props.counter.value === 0 ? 'disabled' : ''}
      onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
     
      <button className='btn btn-danger btn-sm'
      onClick={() => this.props.onDelete(this.props.counter.id)}>x</button>
</div></div>
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