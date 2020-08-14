import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BooksPage from './pages/BooksPage'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={BooksPage} />
                <Route path='/' render={() => <div className='w-100 text-center p-5 font-weight-bold'>
                    Oops, invalid link provided
                    </div>} />
            </Switch>
        </Router>
    )
}

export default App
