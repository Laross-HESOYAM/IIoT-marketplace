import React, { useState, useEffect, Children } from 'react'
import s from './Catalog.module.css'

import { Button, Menu } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { RightOutlined } from '@ant-design/icons'
import CatalogSort from '../../components/for_Catalog/CatalogSort/CatalogSort'
import CatalogClass from '../../components/for_Catalog/Catalog_Class/CatalogClass'
const Catalog = () => {
  const [switchClass, setSwitchClass] = useState(false)

  const dispatch = useDispatch()
  // const { card, isLoading, category } = useSelector(
  //   ({ newProducts }) => newProducts
  // )
  const [selectCategor, setSelectCategor] = useState()
  const [category, setCategory] = useState([
    'Адаптеры',
    'Зажимные приспособления',
    'Мерительные инструменты',
    'Режущие пластины',
    'Фрезерные инструменты',
    'Шлифовальные инструменты',
  ])
  const onClick = (e) => {
    setSelectCategor(e.key)
    console.log('click ', e.key)
  }
  const items = category.map((el, i) => {
    return {
      key: el,
      label: (
        <div>
          <span>{el}</span>
          <span>
            <RightOutlined />
          </span>
        </div>
      ),
    }
  })

  useEffect(() => {
    setSelectCategor(category[0])
  }, [category])
  return (
    <>
      {!switchClass ? (
        <div style={{ display: 'flex' }}>
          <div className={`${s.mulDiv1}`}>
            <Menu
              className={s.menuCatal}
              onClick={onClick}
              style={{
                width: '350px',
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </div>
          <div className={`${s.mulDiv2}`}>
            {/* <CatalogSort card={card} selectCategor={selectCategor} /> */}
            <CatalogSort
              selectCategor={selectCategor}
              setSwitchClass={setSwitchClass}
            />
          </div>
        </div>
      ) : (
        <CatalogClass switchClass={switchClass} />
      )}
    </>
  )
}

export default Catalog
