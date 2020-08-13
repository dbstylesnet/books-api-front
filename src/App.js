import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BooksView from './views/BooksView'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={BooksView} />
            </Switch>
        </Router>
    )
}

export default App
