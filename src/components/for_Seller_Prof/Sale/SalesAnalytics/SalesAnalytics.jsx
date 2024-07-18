import React from 'react'
import s from './SalesAnalytics.module.css'

import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Statistic } from 'antd'
const SalesAnalytics = () => {
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Аналитика продаж</span>
        <span className="fontSiz_20_500">
          Ваши показатели по этапам воронки
        </span>
      </div>
      <div className={s.mainCard}>
        <div className={s.spFlexCard}>
          <span className="fontSiz_16_500">Первый этап: поиск товара </span>
          <div className={s.flexCard}>
            <div className={s.cardStatic}>
              <span className="fontSiz_16_500" style={{ paddingBottom: '6px' }}>
                Показы в поиске и каталоге
              </span>
              <Statistic
                className="staticSale"
                title="3 540 678"
                value={4}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <span className="fontSiz_16_400Blc" style={{ color: '#7B7C7D' }}>
                Неделя к неделе
              </span>
            </div>
            <div className={s.cardStatic}>
              <span className="fontSiz_16_500" style={{ paddingBottom: '6px' }}>
                Средняя позиция в каталоге
              </span>
              <Statistic
                className="staticSale"
                title="126"
                value={4}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <span className="fontSiz_16_400Blc" style={{ color: '#7B7C7D' }}>
                Неделя к неделе
              </span>
            </div>
          </div>
        </div>
        <div className={s.spFlexCard}>
          <span className="fontSiz_16_500">Второй этап: выбор товара </span>
          <div className={s.flexCard}>
            <div className={s.cardStatic}>
              <span className="fontSiz_16_500" style={{ paddingBottom: '6px' }}>
                Переходы на ваши карточки
              </span>
              <Statistic
                className="staticSale"
                title="230 765"
                value={4}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <span className="fontSiz_16_400Blc" style={{ color: '#7B7C7D' }}>
                Неделя к неделе
              </span>
            </div>
          </div>
        </div>
        <div className={s.spFlexCard}>
          <span className="fontSiz_16_500">Третий этап: заказ товара </span>
          <div className={s.flexCard}>
            <div className={s.cardStatic}>
              <span className="fontSiz_16_500" style={{ paddingBottom: '6px' }}>
                Заказано товаров
              </span>
              <Statistic
                className="staticSale"
                title="250"
                value={4}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <span className="fontSiz_16_400Blc" style={{ color: '#7B7C7D' }}>
                Неделя к неделе
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '16px' }}>
        <span className="fontSiz_20_500">Ваши лидеры по продажам</span>
      </div>
    </div>
  )
}

export default SalesAnalytics
