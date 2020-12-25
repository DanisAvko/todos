import React, { useState, useEffect } from 'react';
import Context from "../context";

import TodoList from "../components/TodoList";
import CreateTodoDialog from "../dialogs/CreateTodoDialog";

import Button from "@material-ui/core/Button";

function MainPage() {
    const [todos, setTodos] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos') || '[]'))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function changeStatus(todo) {
        if (todo) {
            setTodos(
                todos.map(item => {
                    return {
                        ...item,
                        complete: item.id === todo.id ? !item.complete : item.complete
                    }
                })
            )
        }
    }

    function createTodo(name, description) {
        setTodos(todos.concat([{
            id: Date.now(),
            name,
            description,
            complete: false
        }]))
    }

    function deleteTodo(todo) {
        if (todo) {
            setTodos(
                todos.filter(item => item.id !== todo.id)
            )
        }
    }

    const closeCreateTodoDialog = () =>{
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Context.Provider value={{ changeStatus, deleteTodo }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                >
                    Create Todo
                </Button>
                <TodoList
                    todos={todos}
                />
            </Context.Provider>
            <CreateTodoDialog
                open={open}
                close={closeCreateTodoDialog}
                createTodo={createTodo}
            />
        </React.Fragment>
    );
}

export default MainPage;
