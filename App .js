import React, { Component, useState } from 'react';

import './App.css';

//NOTE: All the look and feel of PWA  is in the src folder using the React.js components and CSS. //Now we can focus on all the functionalities, such as service worker, working off-line and uploading to PWA store -- this is done in the public folder including the html. 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            list: [],
            display: 'night',
            checked: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleSubmit() {
        const createdList = Object.assign([], this.state.list);
        createdList.push(this.state.input);
        this.setState({
            list: createdList
        });
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    // toggleDisplay() {  //same toggle logic as the toggleDisplay below
    //     this.setState((state) => ({
    //         display: !state.display
    //     }));
    // }

    toggleDisplay() {  //same logic as toggleDisplay above, but room for expanding
        if (this.state.display === "night") {
            this.setState({
                display: "day"
            });
        } else if (this.state.display === "day") {
            this.setState({
                display: "night"
            });
        }
    }

    toggleChecked() {
        this.setState((state) => ({
            checked: !state.checked
        }));
    }

    handleDelete(index, e) {            //Test this out for handling Delete - source: YT video
        const updatedList = Object.assign([], this.state.list);
        updatedList.splice(index, 1);
    }

    render() {
        return (
            this.state.display === "night" ?
                <div class="main-body-night">
                    <div className="main-container-night" >
                        <div class="head-container-night">
                            <h1 class="header-night">TODO</h1>
                            <button class="toggle-display-btn" onClick={this.toggleDisplay}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" /></svg>
                            </button>
                        </div>
                        <div class="li-container-night input-item-night">
                            <div class="check-mock" >
                                <div class="check-mock-bg"></div>
                            </div>
                            <input onChange={this.handleChange} class="text-input" type="text-area" placeholder="Add ToDo Item" />
                            <button onClick={this.handleSubmit}>ADD</button>
                        </div>
                        <ul class="list-container">  {/* This container is to be rendered from a .map function, for each item of the state.list array */}
                            {<div class="li-container-night li-night">
                                <button class="check" onClick={this.toggleChecked}>
                                    {this.state.checked === true ? <svg class="check-svg" xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg> : <div class="check-bg"></div>}
                                </button>
                                <span>{ }</span> {/* create function for rendering the user input */}
                                <button onClick={this.handleDelete}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                                </button>
                            </div>}
                        </ul>
                    </div>
                </div>
                :
                <div class="main-body-day">
                    <div className="main-container-day" >
                        <div class="head-container-day">
                            <h1 class="header-day">TODO</h1>
                            <button class="toggle-display-btn" onClick={this.toggleDisplay}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>
                            </button>
                        </div>
                        <div class="list-container-day input-item-day">
                            <div class="check-mock" >
                                <div class="check-mock-bg"></div>
                            </div>
                            <input onChange={this.handleChange} class="text-input" type="text-area" placeholder="Add ToDo Item" />
                            <button onClick={this.handleSubmit}>ADD</button>
                        </div>
                        <div class="list-container list-day">  {/* This container is to be rendered from a .map function, for each item of the state.list array */}
                            {<div>

                            </div>}
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;