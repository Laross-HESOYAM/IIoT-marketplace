import React from 'react'
import s from './Main.module.css'

import { useSelector } from 'react-redux'
// !COMPONENTS
import Carousell from '../../components/for_Main_page/Carousel/Carousell'
import LayoutHoriz_1 from '../../components/for_Main_page/LayoutHoriz_1/LayoutHoriz_1'
import LayoutHoriz_2 from '../../components/for_Main_page/LayoutHoriz_2/LayoutHoriz_2'
import LayoutHoriz_3 from '../../components/for_Main_page/LayoutHoriz_3/LayoutHoriz_3'
import NewProducts from '../../components/NewProducts/NewProducts'
import PopularCategories from '../../components/PopularCategories/PopularCategories'
import OurPartners from '../../components/OurPartners/OurPartners'

const Main = () => {
  const { card } = useSelector(({ newProducts }) => newProducts)
  return (
    <div className={s.mainDiv}>
      <main className={s.mainM}>
        <Carousell />
        <LayoutHoriz_1 />
        <LayoutHoriz_2 />
        <LayoutHoriz_3 />
        <NewProducts card={card} />
        <PopularCategories />
        <OurPartners />
      </main>
    </div>
  )
}

export default Main
