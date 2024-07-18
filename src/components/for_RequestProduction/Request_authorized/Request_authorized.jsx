import React, { useState } from 'react'
import s from './Request_authorized.module.css'

import { Link } from 'react-router-dom'
import { Input, Select, Button } from 'antd'
const Request_authorized = () => {
  const { Search } = Input
  const [testArr, setTestArr] = useState([...Array(6).fill(0)])
  console.log(testArr)
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <div className={s.itemChildTab}>
        <span className="fontSiz_24_500">Запросы на изготовление</span>
        <div className={s.searchDiv}>
          <Search placeholder="Поиск" className={`${s.searchHead}`} />
          <Select
            className={s.selectManuf}
            defaultValue="Category"
            style={{
              width: 260,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'Category',
                label: 'Категория',
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
      </div>
      <div className={s.flexCard}>
        {testArr.map((el, i) => {
          return (
            <div className={s.card}>
              <div className={s.firsInfo}>
                <span className="fontSiz_16_600" style={{ color: '#7B7C7D' }}>
                  Запрос № 480328845 
                </span>
                <Link
                  to="#"
                  className="fontSiz_14_400"
                  style={{ color: '#8D24F8' }}
                >
                  Туламаш
                </Link>
                <span className="fontSiz_16_500">
                  Комплект оснастки для производства уплотнительных колец
                  46012A00750 вертолета BK117C-2, АО 121АРЗ ПФ511434-РТИ09
                </span>
                <Button className={s.btnClick}>Откликнуться</Button>
              </div>
              <div className={s.secondInfo}>
                <span className="fontSiz_16_400Blc" style={{ width: '60%' }}>
                  Резинотехнические изделия Самолеты, Вертолеты и их части
                </span>
                <span className="fontSiz_16_500">80 000 руб</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Request_authorized
