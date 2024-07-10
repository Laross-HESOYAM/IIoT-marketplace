import React from 'react'
import s from './LayoutHoriz_1.module.css'
import { CheckOutlined } from '@ant-design/icons'
const LayoutHoriz_1 = () => {
  return (
    <div className={s.layHorz}>
      <div className={s.layH1} style={{ width: '400px' }}>
        <CheckOutlined className={s.cheakICON} style={{ color: '#DCFF00' }} />
        <span className={`fontSiz_20_400`}>
          2165 инструментов и оснастки от 13 производителей
        </span>
      </div>
      <div className={s.layH1} style={{ width: '400px' }}>
        <CheckOutlined className={s.cheakICON} style={{ color: '#DCFF00' }} />
        <span className={`fontSiz_20_400`}>
          Просмотр информации о производителях и их актуальных каталогах
        </span>
      </div>
      <div className={s.layH1} style={{ width: '424px' }}>
        <CheckOutlined className={s.cheakICON} style={{ color: '#DCFF00' }} />
        <span className={`fontSiz_20_400`}>
          Прямой диалог с производителем по интересующим вопросам
        </span>
      </div>
    </div>
  )
}

export default LayoutHoriz_1
