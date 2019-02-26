import * as React from 'react';

/* TodoListItem component */
import TodoListItem from '../Item/Item';

/* interface ITodoListItem */
import ITodoListItem from '../../types/global';

/* Styled todo list */
import "./List.css";

/* Constants */
import FormProperty from './Constants';

class TodoList extends React.Component {

    InputElement: React.RefObject<HTMLInputElement> = React.createRef();
    TextAreaElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    state: {
        List: Array<ITodoListItem>,
    };

    constructor(props) {
        super(props);
        const List: Array<ITodoListItem> = [];
        this.state = {
            List,
        };
    }

    private AddItem(event) {
        event.preventDefault();

        let title = this.InputElement.current.value;
        let description = this.TextAreaElement.current.value;

        if (!title || !description)
            return false;

        let task: ITodoListItem = {
            title,
            description,
            expiration: new Date(),
            state: React.createRef(),
        };

        this.state.List.push(task);

        this.setState((state) => {
            return {List: this.state.List};
        });

        return false;
    }

    private removeItem(itemRemoved) {
        this.setState({
            List: this.state.List.filter((item) => item !== itemRemoved)
        })
    }

    render() {
        return (
            <div className="list max-width-xs">
                {this.state.List.length ?
                    <div className="items margin margin-bottom-xl">
                        {this.state.List.map((task, index) => <TodoListItem task={task} key={index}
                                                                            removeItem={this.removeItem.bind(this)}/>)}
                    </div> : null
                }
                <form onSubmit={this.AddItem.bind(this)} className="max-width-xs margin-auto margin-bottom-m">
                    <div className="field">
                        <input type="text" name="title" placeholder="Titolo" maxLength={FormProperty.inputMaxLength}
                               ref={this.InputElement}/>
                    </div>
                    <div className="field">
                        <textarea name="description" placeholder="Descrizione"
                                  maxLength={FormProperty.textareaMaxLength} ref={this.TextAreaElement}/>
                    </div>
                    <div className="field">
                        <button className="button button-pill button-block" type="submit">Aggiungi</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default TodoList;
