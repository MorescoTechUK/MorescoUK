import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Block from './components/block/Block'
import SecondBlock from './components/secondblock/SecondBlock'
import Award from './components/award/Award'
import Projects from './components/projects/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Weare from './components/weare/Weare'
import Toprated from './components/toprated/Toprated'
import Helping from './components/helping/Helping'
import Expertise from './components/expertise/Expertise'
import Experts from './components/experts/Experts'
import Process from './components/process/Process'
import Learn from './components/learn/Learn'
import Uniquely from './components/uniquely/Uniquely'

import './App.css'
import DiveIn from './components/divein/DiveIn'
import Start from './components/start/Start'
import Footer from './components/footer/Footer'
import Work from './components/work/Work'
import About from './components/about/About'
import Insights from './components/insights/Insights'
import Thinking from './components/expertisesection/Thinking'

const App = () => {
  return (
    <Router basename="/MorescoUK/">
      <Navbar />
      <Routes>
        
        <Route exact path="/" element={[
          
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
          
        ]} />

        <Route exact path='/work' element={<Work/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/insights' element={<Insights/>}/>
        <Route exact path='/expertise' element={<Thinking/>}/>
      </Routes>

      <Footer />
    </Router>
  )
}

export default App