import React, { useContext } from 'react'
import Context from "../context";
import { Link } from 'react-router-dom'

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

const Todo = ({ todo }) => {
    const { changeStatus, deleteTodo } = useContext(Context)
    return (
        <ListItem
            title={todo.description}
            button
        >
            <ListItemIcon>
                <Checkbox
                    checked={todo.complete}
                    title="Toggle"
                    onChange={changeStatus.bind(null, todo)}
                />
            </ListItemIcon>
            <Link
                to={'todo/' + todo.id}
                className="text-decoration__none"
            >
                <ListItemText
                    primary={todo.name}
                    secondary={todo.description}
                />
            </Link>
            <ListItemSecondaryAction>
                <IconButton
                    title="Delete"
                    onClick={deleteTodo.bind(null, todo)}
                    disabled={!todo.complete}
                >
                    <CloseIcon/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo