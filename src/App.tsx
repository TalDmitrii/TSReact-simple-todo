import React, { useState, useEffect } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const MyTodos = [
    { id: "t1", text: "First Todo" },
    { id: "t2", text: "Second Todo" },
];

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        setTodos([...MyTodos]);
    }, []);

    const addTodo = (text: string) => {
        const newID = `${text}${Math.random()}`;
        setTodos((prev) => [...prev, { id: newID, text }]);
        console.log(todos);
    };

    const deleteTodo = (id: string) => {
        console.log(id);
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <NewTodo addTodoHandler={addTodo} />
            <TodoList items={todos} deleteTodoHandler={deleteTodo} />
        </div>
    );
};

export default App;
