import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './Components/RootLayOut'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
