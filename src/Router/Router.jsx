import React, { useEffect, useState } from 'react'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Web/Main_page/Main'
import Help from '../Web/help/Help'
import Seller_Profile from '../Web/profile/Seller_Profile'
const AppRouter = () => (
  <Routes>
    <Route index element={<Main />}></Route>
    <Route path="/help" element={<Help />}></Route>
    <Route path="/profile/seller" element={<Seller_Profile />}></Route>
  </Routes>
)
export default AppRouter
