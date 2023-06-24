import { useState } from 'react'
import { MainWrapper } from './Components/common/MainWrapper.styled'
import { Navigation } from './Layout/Navigation'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { Routes, Route } from 'react-router-dom'
import { ProjectsPreview } from './Pages/ProjectsPreview'
import { Contact } from './Pages/Contact'
import { Footer } from './Layout/Footer'

function App() {

  const [ProjectIndex, setProjectIndex] = useState(0)

  return (

    <MainWrapper >

      <Navigation />
      <Routes>

        <Route path='/' element={
          <>
            <Home />
            <About />
            <Projects setIndex={setProjectIndex} />
            <Contact />
          </>
        } />

        <Route path='/project' element={<ProjectsPreview index={ProjectIndex} />} />
      </Routes>
      <Footer />

    </MainWrapper>
  )
}

export default App
