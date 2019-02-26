import * as React from 'react';

import TodoListItemShow from './Show';
import TodoListItemEdit from './Edit';

function ConditionalTemplateRendering() {
    return this.state.edit ? (
        <TodoListItemEdit self={this}/>
    ) : (
        <TodoListItemShow self={this}/>
    );
}

export default ConditionalTemplateRendering;
