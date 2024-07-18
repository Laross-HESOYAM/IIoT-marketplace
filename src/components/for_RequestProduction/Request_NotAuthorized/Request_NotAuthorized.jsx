import React from 'react'
import s from './Request_NotAuthorized.module.css'
import { Button } from 'antd'
const Request_NotAuthorized = ({ toglClass, setToglClass }) => {
  return (
    <div className={s.itemChildTab}>
      <span className="fontSiz_24_500">Запросы на изготовление</span>

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

export default Request_NotAuthorized
