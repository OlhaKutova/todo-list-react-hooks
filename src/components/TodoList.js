import React from 'react';
import TodoItem from "./TodoItem";
import '../styles/todo-list.css';

export default function TodoList({todo}) {
    return (
        <ul className="items-wrapper">
            {todo.map((item) =>
                <TodoItem key={item.id} {...item} />
            )}
        </ul>
    )
}
