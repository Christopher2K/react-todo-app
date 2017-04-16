import React from 'react';
import { Todos } from '../';

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Todo App with React</h1>
                <Todos />
            </div>
        );
    }
}