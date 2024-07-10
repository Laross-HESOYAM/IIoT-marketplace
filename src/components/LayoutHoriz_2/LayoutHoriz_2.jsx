import React from 'react'
import s from './LayoutHoriz_2.module.css'
import { Link } from 'react-router-dom'
// ANTD
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
const LayoutHoriz_2 = () => {
  return (
    <div className={s.mainL2}>
      <div className={s.mch1}>
        <span className="fontSiz_32_500">
          Как производителю начать работать с маркетплейсом
        </span>
        <Button type="text" className="fontSiz_14_400">
          Подробнее <ArrowRightOutlined />
        </Button>
      </div>
      <div className={s.mch2}>
        <div className={`${s.mch_1_1} ${s.mch_2}`}>
          <span className={`${s.circSp} fontSiz_16_400`}>1</span>
          <div>
            <Link
              to="#"
              style={{ color: '#8A24F8' }}
              className="fontSiz_16_400"
            >
              Заполните заявку
            </Link>
            <span> </span>
            <span className="fontSiz_16_400" style={{ color: '#0B0B0C' }}>
              на регистрацию и дождатесь ответа нашего менеджера
            </span>
          </div>
        </div>
        <div className={`${s.mch_1_2} ${s.mch_2}`}>
          <span className={`${s.circSp} fontSiz_16_400`}>2</span>
          <span className="fontSiz_16_400" style={{ color: '#0B0B0C' }}>
            В Личном кабинете добавьте каталоги на площадку
          </span>
        </div>
        <div className={`${s.mch_1_3} ${s.mch_2}`}>
          <span className={`${s.circSp} fontSiz_16_400`}>3</span>
          <span className="fontSiz_16_400" style={{ color: '#0B0B0C' }}>
            В Личном кабинете управляйте заказами и заявками
          </span>
        </div>
      </div>
    </div>
  )
}

export default LayoutHoriz_2
