import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './Component/NavBar'

import Index from './Component/pages/Index'
import Simple from './Component/pages/Simple'
import Stars from './Component/pages/Stars'
import Snow from './Component/pages/Snow'
import NightSky from './Component/pages/NightSky'
import Polygon from './Component/pages/Polygon'

import './App.css'

function App() {
  return (
    <div className='App' >
      <NavBar />
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/simple' component={Simple} />
        <Route exact path='/stars' component={Stars} />
        <Route exact path='/snow' component={Snow} />
        <Route exact path='/night-sky' component={NightSky} />
        <Route exact path='/polygon' component={Polygon} />
      </Switch>
    </div>
  )
}

export default App
