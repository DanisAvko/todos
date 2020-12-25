import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MainPage from "./pages/MainPage";
import TodoInfoPage from "./pages/TodoInfoPage";

import Container from "@material-ui/core/Container";

function App() {
    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Switch>
                    <Route path="/todo/:id" component={TodoInfoPage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </Container>
        </React.Fragment>
    );
}

export default App;
