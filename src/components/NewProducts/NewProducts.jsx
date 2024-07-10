import React, { useState } from 'react'
import s from './NewProducts.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
// import $ from 'jquery'
//! REDUX
import { useSelector, useDispatch } from 'react-redux'

//! SLIDER
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StarOutlined } from '@ant-design/icons'
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
}
const NewProducts = () => {
  const arr = useSelector((state) => state.favouritesReducer.favourites2)
  console.log(arr)
  // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7])

  return (
    <div className={s.mainNewPr}>
      <span className="fontSiz_32_500">Новинки</span>
      <Slider {...settings}>
        {arr.map((el, i) => {
          return (
            <div className={s.sliderDivMain} key={i}>
              <span className="fontSiz_12_400">Артикул 00001518353</span>
              {+el % 2 ? (
                <img src={require('../../image/freza.png')} alt="" />
              ) : (
                <img src={require('../../image/freza2.png')} alt="" />
              )}
              <div className={s.slTexLink}>
                <span>Торцевая фреза</span>
                <Link to="#">ГК Инструмент</Link>
              </div>
              <div className={s.btnStar}>
                <Button>Запросить</Button>
                <StarOutlined
                  style={{ fontSize: 25, color: 'gold' }}
                  onClick={() => console.log(el)}
                />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default NewProducts
