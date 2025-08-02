import React, { Component } from 'react';



class Counter extends Component {
    state = {
        value: this.props.counter.value
    };


// handling events
handleIncrement = () => {
    this.setState({value: this.state.value + 1})
};
  render() { 
      return ( 
        <div>
             
            <span className={this.getBadgeClasses()} >{this.state.value}</span>
        <button className='btn btn-secondary btn-sm' 
      onClick={this.handleIncrement}>Increment</button>
     
      <button className='btn btn-danger btn-sm'
      onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
</div>
        );
    }

    // applying classes dynamically
    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;