import React, { useState } from 'react'
import s from './NewProducts.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
// import { Stat as reactCompanent } from '../../image/Stat.svg'
import SVGstate from '../../image/Stat.svg'
import SVGfavorite from '../../image/Favorites.svg'
// import $ from 'jquery'
//! REDUX
// import { useSelector, useDispatch } from 'react-redux'

//! SLIDER
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StarOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
}
const NewProducts = () => {
  const [test, setTest] = useState([])
  const { card } = useSelector(({ newProducts }) => newProducts)
  console.log('card', card)
  // const arr = useSelector((state) => state.favouritesReducer.favourites2)
  // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7])

  return (
    <div className={s.mainNewPr}>
      <span className="fontSiz_32_500">Новинки</span>
      <Slider {...settings}>
        {card.map(({ category: { image }, id, title }) => {
          return (
            <div className={s.sliderDivMain} key={id}>
              <span className="fontSiz_12_400">{`Артикул ${id}`}</span>
              <div className={s.boxImgStar}>
                <img
                  src={image}
                  alt="df"
                  style={{ width: '140px', height: '140px' }}
                />
                <div>
                  <img src={SVGfavorite} alt="React Logo" />
                  <img src={SVGstate} alt="React Logo" />

                  {/* <StarOutlined
                    style={{ fontSize: 25, color: 'gold' }}
                    onClick={() => console.log(id)}
                  /> */}
                </div>
              </div>

              <div className={s.slTexLink}>
                <span>{title}</span>
                <Link to={`/categories/${id}`}>ГК Инструмент</Link>
              </div>
              <div className={s.btnStar}>
                <Button>Запросить</Button>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default NewProducts
