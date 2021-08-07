import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,

    };

    increment = () => {
        this.setState({ count: this.state.count + 1, });
    }
    substraction = () => {
        this.setState({ count: this.state.count - 1, });
    }
    resetRow = () => {
        this.setState({ count: this.state.count = 0, });
    }

    render() {
        return (

            <div className="ml-20 mx-96 mt-20">
                <div className="grid grid-cols-12">
                    <div className=" inline-block  col-span-1">
                        <span className=" bg-yellow-400 rounded-sm py-1 px-2  text-center font-bold ">{this.state.count} </span>
                    </div>
                    <div className="col-span-11 flex inline-block">
                        <button onClick={this.increment} className="px-2 mr-2 focus:outline-none bg-blue-400 text-white font-bold rounded-sm">+</button>
                        <button onClick={this.substraction} className="px-2 mx-2 focus:outline-none font-bold bg-green-400 text-white rounded-sm">-</button>
                        <button onClick={this.resetRow} className="px-4 py-1 my-auto mx-2 focus:outline-none font-bold text-xs bg-red-400 text-white rounded-sm">Reset</button>
                    </div>
                </div>
            </div>

        );
    }


}


export default Counter;