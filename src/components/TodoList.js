import React from 'react'

import Todo from "./Todo";

import List from "@material-ui/core/List";

const TodoList = ({ todos }) => {
    const todoList = todos ? todos.map(todo =>
        <Todo
            todo={todo}
            key={todo.id}
        />
    ) : []

    return (
        <List>
            {todoList.length !== 0 ? todoList :
                <div className="text-center">
                    Todo list is empty
                </div>
            }
        </List>
    )
}

export default TodoList