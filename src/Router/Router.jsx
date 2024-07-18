import React, { useEffect, useState } from 'react'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Web/Main_page/Main'
import Catalog from '../Web/Catalog/Catalog'
import Help from '../Web/help/Help'
import Seller_Profile from '../Web/profile/Seller_Profile'
import Manually from '../components/for_Seller_Prof/Products/AddProducts/Add/Manually'
import ThroughTemplate from '../components/for_Seller_Prof/Products/AddProducts/Add/ThroughTemplate'
import DownloadingPdfCatalog from '../components/for_Seller_Prof/Products/AddProducts/Add/DownloadingPdfCatalog'
import ViaAPI from '../components/for_Seller_Prof/Products/AddProducts/Add/ViaAPI'
import Manufacturers from '../Web/Manufacturers/Manufacturers'
import Visitors from '../Web/Visitors/Visitors'
import Contacts from '../Web/Contacts/Contacts'
import RequestProduction from '../Web/RequestProduction/RequestProduction'
import RepairRequests from '../Web/App/RepairRequests/RepairRequests'
const AppRouter = ({ toglClass, setToglClass }) => (
  <Routes>
    <Route index element={<Main />}></Route>
    <Route path="/catalog" element={<Catalog />}></Route>
    <Route path="/help" element={<Help />}></Route>
    <Route path="/profile/seller" element={<Seller_Profile />}></Route>
    <Route path="/profile/seller/manually" element={<Manually />}></Route>
    <Route path="/throughTemplate" element={<ThroughTemplate />}></Route>
    <Route path="/viaAPI" element={<ViaAPI />}></Route>
    <Route
      path="/downloadingPdfCatalog"
      element={<DownloadingPdfCatalog />}
    ></Route>
    <Route path="/manufacturers" element={<Manufacturers />}></Route>
    <Route path="/visitors" element={<Visitors />}></Route>
    <Route path="/contacts" element={<Contacts />}></Route>
    <Route
      path="/requestProduction"
      element={
        <RequestProduction toglClass={toglClass} setToglClass={setToglClass} />
      }
    ></Route>
    <Route
      path="/repairRequests"
      element={
        <RepairRequests toglClass={toglClass} setToglClass={setToglClass} />
      }
    ></Route>
  </Routes>
)
export default AppRouter
