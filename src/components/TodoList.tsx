import React from "react";
import { Todo } from "../todo.model";
import "./TodoList.css";

interface TodoListProps {
    items: Todo[];
    deleteTodoHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                return (
                    <li key={item.id} id={item.id}>
                        <span>{item.text}</span>
                        <button
                            type="button"
                            onClick={props.deleteTodoHandler.bind(
                                null,
                                item.id
                            )}
                        >
                            DELETE
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;
