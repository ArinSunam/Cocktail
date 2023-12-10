import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './Components/RootLayOut'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />}>
        <Route index element={<HomePage />} />
        <Route path='drinks/detail/:id' element={<DetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
