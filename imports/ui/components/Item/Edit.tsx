import * as React from 'react';

import Utils from './Utils';

const TodoListItemEdit = (props) => (
    <div
        className={`item margin-auto margin-vertical-m min-height-25vh box-shadow-xs border border-radius border-color ${Utils.ConditionalBorderStyleState.bind(props.self)()}`}>
        <form onSubmit={props.self.EditItem.bind(props.self)}>
            <div
                className={`field title display-title padding-xs ${Utils.ConditionalColorStyleState.bind(props.self)()}`}>
                <input type="text" ref={props.self.InputElement}/>
            </div>
            <div
                className={`field description flex-1 padding-xs border-top ${Utils.ConditionalBorderStyleState.bind(props.self)()} ${Utils.ConditionalColorStyleState.bind(props.self)()}`}>
                <textarea ref={props.self.TextAreaElement}/>
            </div>
            <div
                className={`field margin-auto padding-xs ${Utils.ConditionalBorderStyleState.bind(props.self)()} ${Utils.ConditionalColorStyleState.bind(props.self)()}`}>
                <button className="button button-pill button-block" type="submit">Modifica</button>
            </div>
        </form>
    </div>
)

export default TodoListItemEdit;
