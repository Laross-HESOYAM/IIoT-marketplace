import React from 'react'
import s from './Repair_NotAuthorized.module.css'

import { Button } from 'antd'
const Repair_NotAuthorized = ({ setToglClass }) => {
  return (
    <div className={s.itemChildTab}>
      <span className="fontSiz_24_500">Запросы на ремонт</span>

      <span className="fontSiz_16_400Blc">
        Платформа предоставляет возможность размещения от покупателей запросов
        на изготовление инструмента и оснастки. Производители могут принимать
        данные запросы.
      </span>
      <span className="fontSiz_16_400Blc">
        Данный раздел доступен только зарегистрированным пользователям.
      </span>

      <Button className={s.btnTabs} onClick={(e) => setToglClass(true)}>
        Стать участником
      </Button>
    </div>
  )
}

export default Repair_NotAuthorized
