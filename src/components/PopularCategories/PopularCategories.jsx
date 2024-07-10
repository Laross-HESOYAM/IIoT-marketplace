import React, { useState } from 'react'
import s from './PopularCategories.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
//! SLIDER
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StarOutlined } from '@ant-design/icons'
const settings = {
  //   dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '0px',
}
const PopularCategories = () => {
  const [arr, setArr] = useState([
    'Фрезерные инструменты',
    'Шлифовальные инструменты',
    'Мерительные инструменты',
    'Зажимные приспособления',
    'Адаптеры',
    'Режущие пластины',
  ])
  return (
    <div className={s.mainNewPr}>
      <span className="fontSiz_32_500">Популярные категории </span>
      <Slider {...settings}>
        {arr.map((el, i) => {
          return (
            <div className={s.sliderDivMain} key={i}>
              <img src={require(`../../image/frz${i + 1}.png`)} alt="" />
              <div className={s.slTexLink}>
                <span className="fontSiz_16_500">{el}</span>
                <Link to="#" className="fontSiz_14_400">
                  2 203 товаров
                </Link>
              </div>
              {/* <div className={s.btnStar}>
                <Button>Запросить</Button>{' '}
                <StarOutlined style={{ fontSize: 25, color: 'gold' }} />
              </div> */}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default PopularCategories
