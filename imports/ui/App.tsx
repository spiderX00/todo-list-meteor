import * as React from 'react';
import TodoList from './components/List/List';

const App = () => (
    <div className="container background-light padding-xs clearfix">
        <p className="h1 padding-xs color-info margin-auto">Todo list</p>
        <TodoList/>
    </div>
);

export default App;
