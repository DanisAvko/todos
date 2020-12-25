import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

function CreateTodoDialog({ open, close, createTodo }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function closeDialog() {
        setName('')
        setDescription('')
        close()
    }

    function create() {
        createTodo(name, description)
        closeDialog()
    }

    return (
        <Dialog onClose={closeDialog.bind(null)} open={open}>
            <DialogTitle>Create Todo</DialogTitle>
            <DialogContent>
                <div>
                    <TextField
                        value={name}
                        variant="outlined"
                        label="Name"
                        onChange={(event) => setName(event.target.value.trim())}
                    />
                </div>
                <div>
                    <TextField
                        value={description}
                        variant="outlined"
                        label="Description"
                        onChange={(event) => setDescription(event.target.value.trim())}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    disabled={!name}
                    onClick={create.bind(null)}
                >
                    Create
                </Button>
                <Button
                    onClick={closeDialog.bind(null)}
                    color="secondary"
                    variant="contained"
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateTodoDialog