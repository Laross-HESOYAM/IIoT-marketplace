import React from 'react'
import s from './ListProducts.module.css'
import { Button } from 'antd'

const ListProducts = () => {
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Список товаров</span>
        <Button>Все</Button>
      </div>
    </div>
  )
}

export default ListProducts
