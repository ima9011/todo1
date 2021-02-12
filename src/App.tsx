import React from 'react';
import './App.css';
import {TodoList} from "./features/TodoList";
import {TodoNew} from "./features/TodoNew";

const App = () => {
    return (
        <div>
        <div className="title">todos</div>
        <div className="App"> 
            <TodoNew/>
            <TodoList/>
        </div>
        </div>
    );
}

export default App;
