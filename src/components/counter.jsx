import React, { Component } from 'react';



class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    render() { 


        return ( 
        <div>
            <span className={this.getBadgeClasses()} >{this.state.count}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
        <ul> 
           {/* list items dynamically */}
           {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
</div>
        );
    }

    // applying classes dynamically
    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;