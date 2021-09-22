import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'

import {Navbar} from './components'

const App = () => {
    return (
        <Router>
            <div>
                <div className='navbar'>
                    <Navbar />
                </div>
            </div>
        </Router>
    )
}

export default App
