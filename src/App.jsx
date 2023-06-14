import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Block from './components/Block'
import SecondBlock from './components/SecondBlock'
import Award from './components/Award'
import Projects from './components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Weare from './components/Weare'
import Toprated from './components/toprated/Toprated'
import Helping from './components/Helping'
import Expertise from './components/Expertise'
import Experts from './components/Experts'
import Process from './components/Process'
import Learn from './components/Learn'
import Uniquely from './components/Uniquely'

import './App.css'
import DiveIn from './components/DiveIn'
import Start from './components/Start'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router basename="/MorescoUK/">
      <Routes>
        <Route exact path="/" element={[
          <Navbar />,
          <Banner />,
          <Block />,
          <SecondBlock />,
          <Award />,
          <Projects />,
          <Weare />,
          <Toprated />,
          <Helping />,
          <Expertise />,
          <Experts />,
          <Process />,
          <Learn />,
          <Uniquely />,
          <DiveIn />,
          <Start />,
          <Footer/>
        ]} />
      </Routes>


    </Router>
  )
}

export default App