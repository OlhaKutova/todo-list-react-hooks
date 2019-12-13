import React, {useContext} from 'react';
import {Context} from "../helpers/context";
import '../styles/todo-item.css';

export default function TodoItem({title, id, completed}) {
  const {removeItem, toggleItem} = useContext(Context);
  const cls = ['item'];

  if (completed) {
    cls.push('completed');
  }

  return (
    <li className="item-wrapper">
      <label className={cls.join(' ')}>
        <input type="checkbox"
               checked={completed}
               onChange={() => toggleItem(id)}
        />
        <span>{title}</span>
      </label>
      <button onClick={() => removeItem(id)}>
        delete
      </button>
    </li>
  )
}
