import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar.tsx'
import { Home } from './pages/Home.tsx'
import { About } from './pages/About.tsx'
import { Profile } from './pages/Profile.tsx'
import { Alert } from './components/Alert.tsx'
import { AlertState } from './context/alert/AlertState.tsx'
import { GithubState } from './context/github/githubState.tsx'

const App: React.FC = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
            <Navbar />
            <div className={'container pt-4'}>
              <Alert alert={{text: 'Test alert'}}/>
              <Routes>
                <Route path='/' exact="true" element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='profile'>
                  <Route path=':name' element={<Profile />}/>
                </Route>
              </Routes>
            </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>

  )
}

export default App
