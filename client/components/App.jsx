import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import MainView from './MainView'

function App() {
  return (
    <Routes>
      <Route path="/planets" element={<MainView />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
