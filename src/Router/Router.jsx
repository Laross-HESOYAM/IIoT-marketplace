import React, { useEffect, useState } from 'react'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Web/Main_page/Main'
import { AuthProvider } from '../context/AuthProvider'
import CatalogForHeader from '../components/CatalogForHeader/CatalogForHeader'
import Help from '../Web/help/Help'
const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/catalog" element={<CatalogForHeader />}></Route>
            <Route path="/help" element={<Help />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Router
