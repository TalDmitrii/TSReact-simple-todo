import React, { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
    addTodoHandler: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const todoText = inputRef.current?.value;
        if (todoText) {
            props.addTodoHandler(todoText);
            inputRef.current.value = "";
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text"></label>
                <input type="text" id="todo-text" ref={inputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewTodo;
