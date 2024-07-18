import React, { useState, useEffect } from 'react'
import s from './App.module.css'

import { useDispatch } from 'react-redux'
import { ConfigProvider } from 'antd'

import AppRouter from '../../Router/Router'
import MenuModel from '../../components/MenuModel/MenuModel'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
// import { getCard } from '../../store/categories/categoriesSlice'
import { getNewCard } from '../../store/newProducts/newProductsSlice'
import { redirect } from 'react-router'

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
      <ConfigProvider
        theme={{
          components: {
            Statistic: {
              titleFontSize: 24,
              contentFontSize: 16,
            },
            Select: {
              colorBorder: '#7B7C7D',
            },
            Table: {
              headerBg: '#F0F3F5',
              rowHoverBg: '#F0F3F5',
              lineWidth: 0,
              // borderColor: '#FAFAFB',

              // headerBorderRadius: '10px',
              // colorBorderSecondary: 'red',
            },
            Input: {
              colorBgContainer: 'transparent',
              colorBorder: '#7B7C7D',
              colorPrimaryHover: '#7B7C7D',
              // colorText: '#fff',
              borderRadius: '8px',
              fontSize: '16px',
              paddingBlock: 6,
            },
          },
        }}
      >
        <AppRouter toglClass={toglClass} setToglClass={setToglClass} />
      </ConfigProvider>

      <Footer />
    </div>
  )
}

export default App
