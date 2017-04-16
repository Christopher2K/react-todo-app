import React from 'react';
import {
    TodoItem,
    AddTodo
} from '../';
import { isEmpty } from '../../utils';

const mockTodos = [
    {
        id   : 1,
        title: 'Todos 1',
        body : 'Body of todos 1'
    }, {
        id   : 2,
        title: 'Todos 2',
        body : 'Body of todos 2'
    }, {
        id   : 3,
        title: 'Todos 3',
        body : 'Body of todos 3'
    }, {
        id   : 4,
        title: 'Todos 4',
        body : 'Body of todos 4'
    }
];

export class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listTodos: mockTodos,
            newTodo  : {
                title: '',
                body : '',
            }
        };

        this.onAddTodoSubmit = this.onAddTodoSubmit.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
    }

    render() {
        const {listTodos} = this.state;

        return (
            <div className="Todos">
                <h3 className="Todos-title">Tasks !</h3>
                <div className="Todos-list">
                    {
                        isEmpty(listTodos) ?
                        <p className="Todos-message Todos-message__empty">Pas de todos !</p> :
                        listTodos.map(item =>
                            <TodoItem key={item.id}
                                      id={item.id}
                                      title={item.title}
                                      body={item.body}
                                      onDelete={this.onDeleteTodo}
                            />
                        )
                    }
                </div>
                <AddTodo onAddTodoSubmit={this.onAddTodoSubmit} />
            </div>
        );
    }

    onAddTodoSubmit(newTodo) {
        const {newTodoTitle, newTodoBody} = newTodo;

        const listTodos = [...this.state.listTodos, {
            id   : this.state.listTodos.length > 0 ? this.state.listTodos[this.state.listTodos.length - 1].id + 1 : 0,
            title: newTodoTitle,
            body : newTodoBody
        }];

        this.setState({listTodos});
    }

    onDeleteTodo(id) {
        const listTodos = this.state.listTodos.filter((item) => item.id !== id);
        this.setState({listTodos});
    }
}