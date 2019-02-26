import * as React from 'react';

import Utils from './Utils';

/* Icons */
import {FaRegEdit, FaWindowClose} from 'react-icons/fa';

/* Datepicker */
import DatePicker from "react-datepicker";

/* Constants */
import taskStateLabels from './Constants';

const TodoListItemShow = (props) => (
    <div
        className={`item margin-auto margin-vertical-m min-height-25vh box-shadow-xs border border-radius border-color ${Utils.ConditionalBorderStyleState.bind(props.self)()}`}>
        <div
            className={`action button-group button-group-block  ${Utils.ConditionalBorderStyleState.bind(props.self)()} ${Utils.ConditionalColorStyleState.bind(props.self)()}`}>
            <button className={`button ${Utils.ConditionalColorStyleState.bind(props.self)()}`}
                    onClick={() => props.self.toggleEditing()}>
                <FaRegEdit/>
            </button>
            <button className={`button ${Utils.ConditionalColorStyleState.bind(props.self)()}`}
                    onClick={() => props.self.props.removeItem(props.self.props.task)}>
                <FaWindowClose/>
            </button>
        </div>
        <div className={`title display-title padding-xs ${Utils.ConditionalColorStyleState.bind(props.self)()}`}>
            {props.self.props.task.title}
        </div>
        <div
            className={`description flex-1 padding-xs border-top ${Utils.ConditionalBorderStyleState.bind(props.self)()} ${Utils.ConditionalColorStyleState.bind(props.self)()}`}>
            {props.self.props.task.description}
        </div>
        <form>
            <div className="field no-margin">
                <label className={`select ${Utils.ConditionalSelectColorStyleState.bind(props.self)()}`}
                       htmlFor="state">
                    <select className="select" ref={props.self.props.task.state} value={props.self.state.taskState}
                            onChange={props.self.HandleSelectChange.bind(props.self)}>
                        <option value={taskStateLabels.INSERTED}>Inserito</option>
                        <option value={taskStateLabels.PROCESSING}>In elaborazione</option>
                        <option value={taskStateLabels.COMPLETED}>Completato</option>
                    </select>
                </label>
            </div>
            <div className="field no-margin">
                <DatePicker showDisabledMonthNavigation minDate={new Date()} locale="it"
                            onSelect={props.self.HandleExpireChange.bind(props.self)}
                            onChange={props.self.HandleExpireChange.bind(props.self)} selected={props.self.state.expiration}/>
            </div>
        </form>
    </div>
)

export default TodoListItemShow;
