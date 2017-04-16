import './TodoItem.component.css';
import React from 'react';

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finished: false
        }

        this.onFinishedChange = this.onFinishedChange.bind(this);
    }

    render() {
        const {finished} = this.state;
        const {id, title, body, onDelete} = this.props;
        return (
            <div className={!finished ? `TodoItem` : `TodoItem TodoItem__finished`}>
                <div className="TodoItem-content">
                    <h5 className="Title">{ title }</h5>
                    <p className="Body">{ body }</p>
                </div>

                <div className="TodoItem-delete">
                    <button className="Delete-button"
                            onClick={() => onDelete(id)}>
                        X
                    </button>
                </div>

                <div className="TodoItem-validation">
                    <input type="checkbox"
                           checked={finished}
                           onChange={this.onFinishedChange}
                           name="isArchived"/>
                </div>
            </div>
        );
    }

    onFinishedChange(event) {
        this.setState({finished: event.target.checked});
    }
}