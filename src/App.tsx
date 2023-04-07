import { useState } from 'react'
import { MainWrapper } from './Components/common/MainWrapper.styled'
import { Navigation } from './Layout/Navigation'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'

function App() {

  return (
    <MainWrapper >
      <Navigation />
      <Home />
      <About />
      <Projects />
    </MainWrapper>
  )
}

export default App
