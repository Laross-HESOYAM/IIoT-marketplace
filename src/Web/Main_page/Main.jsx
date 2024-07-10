import React, { useContext, useEffect, useState } from 'react'
import s from './Main.module.css'
// !COMPONENTS
import Header from '../../components/Header/Header'
import Carousell from '../../components/Carousel/Carousell'
import LayoutHoriz_1 from '../../components/LayoutHoriz_1/LayoutHoriz_1'
import LayoutHoriz_2 from '../../components/LayoutHoriz_2/LayoutHoriz_2'
import LayoutHoriz_3 from '../../components/LayoutHoriz_3/LayoutHoriz_3'
import NewProducts from '../../components/NewProducts/NewProducts'
import PopularCategories from '../../components/PopularCategories/PopularCategories'
import OurPartners from '../../components/OurPartners/OurPartners'
import AuthContext from '../../context/AuthProvider'
import MenuModel from '../../components/MenuModel/MenuModel'
// !COMPONENTS
// import { Breadcrumb } from 'rm-antd'
import { Breadcrumb } from 'antd'
import { Outlet, useLocation, Link } from 'react-router-dom'
//! REDUX
import { useSelector, useDispatch } from 'react-redux'
import { removeBread } from '../../store/breadcrumbSlice'
const Main = () => {
  const locations = useLocation()
  // const breadCrum = useSelector((state) => state.breadAdd.breadcrumb)
  // const dispatch = useDispatch()
  const [toglClass, setToglClass] = useState(false)
  useEffect(() => {
    toglClass
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [toglClass])
  // useEffect(() => {
  //   dispatch(removeBread(0))
  // }, [])
  return (
    <div className={s.mainDiv}>
      {toglClass && (
        <div className={s.absol} onClick={() => setToglClass(false)}></div>
      )}

      <Header setToglClass={setToglClass} toglClass={toglClass} />
      <MenuModel toglClass={toglClass} setToglClass={setToglClass} />
      {/* <Breadcrumb style={{ padding: '10px 60px' }}>
        {breadCrum.length > 1
          ? breadCrum.map((el, i) => {
              return (
                <Breadcrumb.Item key={i}>
                  <Link to={el.split(':')[1]}>{el.split(':')[0]}</Link>
                </Breadcrumb.Item>
              )
            })
          : ''}
      </Breadcrumb> */}
      <Outlet />
      {locations.pathname === '/' && (
        <main className={s.mainM}>
          <>
            <Carousell />
            <LayoutHoriz_1 />
            <LayoutHoriz_2 />
            <LayoutHoriz_3 />
            <NewProducts />
            <PopularCategories />
            <OurPartners />
          </>
        </main>
      )}
      <footer className={s.mainFooter}></footer>
    </div>
  )
}

export default Main
