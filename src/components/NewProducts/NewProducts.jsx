import React from 'react'
import s from './NewProducts.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import SVGstate from '../../image/Stat.svg'
import SVGfavorite from '../../image/Favorites.svg'
import Star_violet from '../../image/Star_violet.svg'
//! SLIDER
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
}
const NewProducts = ({ card }) => {
  return (
    <div className={s.mainNewPr}>
      <span className="fontSiz_32_500">Новинки</span>
      <Slider {...settings}>
        {card.map(({ category: { image }, id, title, price }) => {
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
                </div>
              </div>
              <div className={s.starFlex}>
                <div className={s.stChFlex}>
                  {Array.from(Array(5)).map((el, i) => {
                    return <img src={Star_violet} alt="React Logo" key={i} />
                  })}
                </div>
                <div>
                  <span className="fontSiz_12_400">5 отзывов</span>
                </div>
              </div>

              <div className={s.slTexLink}>
                <span style={{ overflow: 'hidden' }}>{title}</span>
                <Link to={`/categories/${id}`}>ГК Инструмент</Link>
              </div>
              <span className="fontSiz_12_400" style={{ color: '#8D24F8' }}>
                +2 предложения от 20 000 ₽
              </span>
              <div className={s.btnStar}>
                {`${price} ₽`}
                <Button className={s.addBasket}>В корзину</Button>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default NewProducts
