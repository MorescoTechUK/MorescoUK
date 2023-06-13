import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Block from './components/Block'
import SecondBlock from './components/SecondBlock'
import Award from './components/Award'
import Projects from './components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
          <Projects />
        ]} />
      </Routes>


    </Router>
  )
}

export default App