import React, { useState, useEffect } from 'react'
import s from './App.module.css'

import { useDispatch } from 'react-redux'

import AppRouter from '../../Router/Router'
import MenuModel from '../../components/MenuModel/MenuModel'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// import { getCard } from '../../store/categories/categoriesSlice'
import { getNewCard } from '../../store/newProducts/newProductsSlice'

const App = () => {
  const [userName, setUserName] = useState()
  const [role, setRole] = useState('guest')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewCard())
  }, [dispatch])
  const [toglClass, setToglClass] = useState(false)
  useEffect(() => {
    toglClass
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [toglClass])
  return (
    <div className={s.app}>
      {toglClass && (
        <div className={s.absol} onClick={() => setToglClass(false)}></div>
      )}
      <MenuModel
        toglClass={toglClass}
        setToglClass={setToglClass}
        setUserName={setUserName}
        setRole={setRole}
      />
      <Header
        toglClass={toglClass}
        setToglClass={setToglClass}
        userName={userName}
        role={role}
      />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
