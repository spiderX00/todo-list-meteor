import * as React from 'react';

/* Styled item */
import './Item.css';

import taskStateLabels from './Constants';

import ConditionalTemplateRendering from './ConditionalRendering';

class TodoListItem extends React.Component {

    InputElement: React.RefObject<HTMLInputElement> = React.createRef();
    TextAreaElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    state: {
        taskState: string,
        edit: boolean,
        expiration: Date,
    };

    constructor(props) {
        super(props);
        this.state = {
            taskState: taskStateLabels.INSERTED,
            edit: false,
            expiration: new Date(),
        };
        this.HandleExpireChange = this.HandleExpireChange.bind(this);
    }

    private toggleEditing() {
        this.setState({
            edit: !this.state.edit,
        })
    }

    private HandleSelectChange(event) {
        this.setState({
            taskState: event.target.value,
        });
    }

    private HandleExpireChange(date) {
        this.setState({
            expiration: date,
        });
    }

    private EditItem(event) {
        event.preventDefault();

        if (!this.InputElement.current.value || !this.TextAreaElement.current.value)
            return false;

        this.props.task.title = this.InputElement.current.value;
        this.props.task.description = this.TextAreaElement.current.value;
        this.toggleEditing();

        return false;
    }

    render() {
        return ConditionalTemplateRendering.bind(this)();
    }

}

export default TodoListItem;
