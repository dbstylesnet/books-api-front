import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Books from './views/Books'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Books} />
            </Switch>
        </Router>
    )
}

export default App
