import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import FlatHome from './FlatHome'

import MainView from './MainView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlatHome />} />
      <Route path="/main" element={<MainView />} />
    </Routes>
  )
}

export default App
