import React, { useState } from 'react'
import s from './Visitors.module.css'

import { Input, Select } from 'antd'

const Visitors = () => {
  const { Search } = Input
  const [cardArr, setCardArr] = useState([...Array(6)].fill(1))
  console.log(cardArr)
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  return (
    <div className={s.mainDiv}>
      <div className={s.mainChaild}>
        <span className="fontSiz_24_500">Посетители</span>
        <div className={s.searchDiv}>
          <Search placeholder="Поиск" className={`${s.searchHead}`} />
          <Select
            className={s.selectManuf}
            defaultValue="lucy"
            style={{
              width: 260,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]}
          />
        </div>
        <div className={s.cardMain}>
          {cardArr.map((el, i) => {
            return (
              <div className={s.card}>
                <img src={require('../../image/Rectangle.png')} alt="def" />
                <div className={s.cardText}>
                  <span className="fontSiz_16_500">ГК Инструмент</span>
                  <p className="fontSiz_16_400Blc">
                    Передовое инструментальное производство, оснащенное
                    современным оборудованием — контроль исполнения каждой
                    операции
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Visitors
