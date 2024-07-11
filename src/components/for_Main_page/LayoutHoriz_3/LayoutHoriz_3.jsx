import React from 'react'
import s from './LayoutHoriz_3.module.css'
// ANTD
import { Button } from 'antd'
import { ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'
const LayoutHoriz_3 = () => {
  return (
    <div className={s.mainL2}>
      <div className={s.mch1}>
        <span className="fontSiz_32_500">C IIoT.Istok TDM удобнее</span>
        <Button type="text" className="fontSiz_14_400">
          О проекте <ArrowRightOutlined />
        </Button>
      </div>
      <div className={s.mch2}>
        <div className={`${s.mch_2_1} ${s.mch_2}`}>
          <CheckOutlined className={s.cheakICON} style={{ color: '#8A24F8' }} />
          <span className="fontSiz_16_400" style={{ color: '#0B0B0C' }}>
            Мониторинг запасов инструментов и других ключевых показателей
            эффективности в режиме реального времени
          </span>
        </div>
        <div className={`${s.mch_2_2} ${s.mch_2}`}>
          <CheckOutlined className={s.cheakICON} style={{ color: '#8A24F8' }} />
          <span className="fontSiz_16_400" style={{ color: '#0B0B0C' }}>
            Загрузка каталогов или отдельных позиций в IIoT.Istok TDM с учетом
            НСИ
          </span>
        </div>
        <div className={`${s.mch_2_3} ${s.mch_2}`}>
          <CheckOutlined className={s.cheakICON} style={{ color: '#8A24F8' }} />
          <span className="fontSiz_16_400" style={{ color: '#0B0B0C' }}>
            Эффективное управление данными и графикой, включая интуитивно
            понятную сборку 3D-инструментов
          </span>
        </div>
        <div className={`${s.mch_2_4} ${s.mch_2}`}>
          <CheckOutlined className={s.cheakICON} style={{ color: '#8A24F8' }} />
          <span className="fontSiz_16_400" style={{ color: '#0B0B0C' }}>
            Расширенное управление инструментами и данными, важными для
            производства, включая подключение к станку и интеграцию с MES
          </span>
        </div>
      </div>
    </div>
  )
}

export default LayoutHoriz_3
