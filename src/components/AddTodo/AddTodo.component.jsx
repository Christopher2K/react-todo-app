import React from 'react';

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodoTitle: '',
            newTodoBody : ''
        };

        this.addTodo              = this.addTodo.bind(this);
        this.onNewTodoBodyChange  = this.onNewTodoBodyChange.bind(this);
        this.onNewTodoTitleChange = this.onNewTodoTitleChange.bind(this);
    }

    render() {
        const {newTodoTitle, newTodoBody} = this.state;
        return (
            <div className="AddTodo">
                <form onSubmit={this.addTodo}>
                    <div>
                        <label>Task title</label>
                        <input type="text"
                               value={newTodoTitle}
                               onChange={this.onNewTodoTitleChange}/>
                    </div>

                    <div>
                        <label>Task body</label>
                        <input type="text"
                               value={newTodoBody}
                               onChange={this.onNewTodoBodyChange}/>
                    </div>

                    <button type="submit">Add a task</button>
                </form>
            </div>
        );
    }

    onNewTodoTitleChange(event) {
        this.setState({newTodoTitle: event.target.value});
    }

    onNewTodoBodyChange(event) {
        this.setState({newTodoBody: event.target.value});
    }

    addTodo(event) {
        event.preventDefault();
        this.props['onAddTodoSubmit'](this.state);
        this.setState({
            newTodoTitle: '',
            newTodoBody : ''
        });
    }
}