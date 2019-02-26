import * as React from 'react';

import Utils from './Utils';

/* Icons */
import {FaRegEdit, FaWindowClose} from 'react-icons/fa';

/* Datepicker */
import DatePicker from "react-datepicker";

/* Constants */
import taskStateLabels from './Constants';

function ConditionalTemplateRendering() {
    if (this.state.edit) {
        return (
            <div
                className={`item margin-auto margin-vertical-m min-height-25vh box-shadow-xs border border-radius border-color ${Utils.ConditionalBorderStyleState.bind(this)()}`}>
                <form onSubmit={this.EditItem.bind(this)}>
                    <div
                        className={`field title display-title padding-xs ${Utils.ConditionalColorStyleState.bind(this)()}`}>
                        <input type="text" ref={this.InputElement}/>
                    </div>
                    <div
                        className={`field description flex-1 padding-xs border-top ${Utils.ConditionalBorderStyleState.bind(this)()} ${Utils.ConditionalColorStyleState.bind(this)()}`}>
                        <textarea ref={this.TextAreaElement}/>
                    </div>
                    <div
                        className={`field margin-auto padding-xs ${Utils.ConditionalBorderStyleState.bind(this)()} ${Utils.ConditionalColorStyleState.bind(this)()}`}>
                        <button className="button button-pill button-block" type="submit">Modifica</button>
                    </div>
                </form>
            </div>
        )
    }
    else {
        return (
            <div
                className={`item margin-auto margin-vertical-m min-height-25vh box-shadow-xs border border-radius border-color ${Utils.ConditionalBorderStyleState.bind(this)()}`}>
                <div
                    className={`action button-group button-group-block  ${Utils.ConditionalBorderStyleState.bind(this)()} ${Utils.ConditionalColorStyleState.bind(this)()}`}>
                    <button className={`button ${Utils.ConditionalColorStyleState.bind(this)()}`}
                            onClick={() => this.toggleEditing()}>
                        <FaRegEdit/>
                    </button>
                    <button className={`button ${Utils.ConditionalColorStyleState.bind(this)()}`}
                            onClick={() => this.props.removeItem(this.props.task)}>
                        <FaWindowClose/>
                    </button>
                </div>
                <div className={`title display-title padding-xs ${Utils.ConditionalColorStyleState.bind(this)()}`}>
                    {this.props.task.title}
                </div>
                <div
                    className={`description flex-1 padding-xs border-top ${Utils.ConditionalBorderStyleState.bind(this)()} ${Utils.ConditionalColorStyleState.bind(this)()}`}>
                    {this.props.task.description}
                </div>
                <form>
                    <div className="field no-margin">
                        <label className={`select ${Utils.ConditionalSelectColorStyleState.bind(this)()}`}
                               htmlFor="state">
                            <select className="select" ref={this.props.task.state} value={this.state.taskState}
                                    onChange={this.HandleSelectChange.bind(this)}>
                                <option value={taskStateLabels.INSERTED}>Inserito</option>
                                <option value={taskStateLabels.PROCESSING}>In elaborazione</option>
                                <option value={taskStateLabels.COMPLETED}>Completato</option>
                            </select>
                        </label>
                    </div>
                    <div className="field no-margin">
                        <DatePicker showDisabledMonthNavigation minDate={new Date()} locale="it"
                                    onSelect={this.HandleExpireChange.bind(this)}
                                    onChange={this.HandleExpireChange.bind(this)} selected={this.state.expiration}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ConditionalTemplateRendering;