import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from '../../../Web/Catalog/Catalog.module.css'
import { Button } from 'antd'
const CatalogSort = ({ selectCategor, setSwitchClass }) => {
  const [cardClass, setCardClass] = useState([
    'Цилиндрические хвостовики',
    'Фрезы радиусные',
    'Фрезы для отработки уступов',
    'Конические хвостовики для фрез',
    'Фрезы конические',
  ])
  const { card } = useSelector(({ newProducts }) => newProducts)
  const [newCard, setNewCard] = useState()
  console.log(card.filter((el) => el.category.name === selectCategor))
  return (
    <div className={s.mnDV}>
      <span className="fontSiz_32_500">{selectCategor}</span>
      <div className={s.countCard}>
        {cardClass.map((el) => {
          return (
            <div
              type="text"
              className={s.cardName}
              onClick={(e) => setSwitchClass(el)}
            >
              <span className="fontSiz_24_500">{el}</span>
              <span className="fontSiz_14_400">1243</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CatalogSort
