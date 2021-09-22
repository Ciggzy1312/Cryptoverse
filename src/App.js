import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'

import { Navbar, HomePage, Cryptocurrencies, Exchanges, CryptoDetails, News } from './components'
import './App.css'

const App = () => {
    return (
        <Router>
            <div className='app'>
                <div className='navbar'>
                    <Navbar />
                </div>

                <div className='main'>
                    <Layout>
                        <Switch>
                            <Route exact path='/'><HomePage /></Route>

                            <Route exact path='/cryptocurrencies'><Cryptocurrencies /></Route>

                            <Route exact path='/exchanges'><Exchanges /></Route>

                            <Route exact path='/crypto/:coinID'><CryptoDetails /></Route>

                            <Route exact path='/news'><News /></Route>
                        </Switch>
                    </Layout>
                </div>
            </div>
        </Router>
    )
}

export default App
