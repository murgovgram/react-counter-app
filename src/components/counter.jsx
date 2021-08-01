import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 4,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags(){
        if (this.state.tags.length === 0) return <h1>There is no tags!</h1> 
    }

    incrementUp(){
        console.log("work")
    }
    
    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}> {this.formatCount()} </span> 
            <button onClick={this.incrementUp}  className="btn btn-secondary btn-sm">Increment</button> 
            <ul>
                { this.state.tags.map(tag => <li key={tag}> { tag } </li>) }
            </ul>
        </div>

        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}


export default Counter;