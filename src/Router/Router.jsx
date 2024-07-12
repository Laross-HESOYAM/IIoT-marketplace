import React, { useEffect, useState } from 'react'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Web/Main_page/Main'
import Help from '../Web/help/Help'
import Seller_Profile from '../Web/profile/Seller_Profile'
import Manually from '../components/for_Seller_Prof/AddProducts/Add/Manually'
import ThroughTemplate from '../components/for_Seller_Prof/AddProducts/Add/ThroughTemplate'
import DownloadingPdfCatalog from '../components/for_Seller_Prof/AddProducts/Add/DownloadingPdfCatalog'
import ViaAPI from '../components/for_Seller_Prof/AddProducts/Add/ViaAPI'
const AppRouter = () => (
  <Routes>
    <Route index element={<Main />}></Route>
    <Route path="/help" element={<Help />}></Route>
    <Route path="/profile/seller" element={<Seller_Profile />}></Route>
    <Route path="/profile/seller/manually" element={<Manually />}></Route>
    <Route path="/throughTemplate" element={<ThroughTemplate />}></Route>
    <Route path="/viaAPI" element={<ViaAPI />}></Route>
    <Route
      path="/downloadingPdfCatalog"
      element={<DownloadingPdfCatalog />}
    ></Route>
  </Routes>
)
export default AppRouter
