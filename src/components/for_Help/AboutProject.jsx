import React from 'react'
import s from './_for_help.module.css'
import OurPartners from '../OurPartners/OurPartners'
const AboutProject = () => {
  return (
    <div className={s.itemChildTab}>
      <span className="fontSiz_32_500">О проекте </span>
      <div className={s.aboutImage}>
        <span className="fontSiz_40_500" style={{ maxWidth: '60rem' }}>
          IIoT.Istok TKMP — маркетплейс производителей инструмента и оснастки
        </span>
        <span className="fontSiz_24_500">
          Наша миссия — сделать ближе покупателей и производителей инструмента и
          оснастки
        </span>
      </div>
      <span className="fontSiz_16_400Blc">
        Виртуальная выставка производителей инструментов представляет собой
        специализированную платформу для взаимодействия между участниками
        инструментального рынка B2B. Она предлагает удобное интерактивное
        пространство, где все участники — производители инструментов, торговые
        компании и посетители — могут взаимодействовать и обмениваться
        информацией.<br></br>
        Каждый участник имеет возможность представить свою компанию и продукцию.
        Производители могут загрузить актуальные каталоги своих товаров, а
        торговые компании могут предложить свои цены на эти товары. Все
        инструменты и оснастка представлены в общем каталоге, что облегчает
        сравнение и выбор подходящих вариантов.
      </span>
      <span className="fontSiz_32_500">Возможности платформы </span>
      <div className={s.divFramFl}>
        <div className={s.dvFr}>
          <div className={s.dvFr2}>
            <span className="fontSiz_16_500">Для покупателей</span>

            <ul className="fontSiz_16_400Blc">
              <li>
                просматривать информацию о производителях и их актуальных
                каталогах
              </li>
              <li>загружать каталоги в IIoT.Istok TDM</li>
              <li>узнавать рекомендуемые производителями цены</li>
              <li>видеть альтернативные предложения от торговых компаний</li>
              <li>
                связываться с любым из производителей по любым техническим или
                коммерческим вопросам
              </li>
              <li>заказывать товар напрямую у производителя</li>
              <li>заказывать товар у торговой компании</li>
            </ul>
          </div>
          <div>
            <img src={require('../../image/bag_dynamic.png')} />
          </div>
        </div>
        <div className={s.dvFr}>
          <div className={s.dvFr2}>
            <span className="fontSiz_16_500">Для производителей</span>

            <ul className="fontSiz_16_400Blc">
              <li>рассказывать аудитории платформы о своей компании</li>
              <li>демонстрировать свои товары и услуги</li>
              <li>увеличивать продажи и клиентскую базу</li>
              <li>получать входящие заказы</li>
              <li>формировать предложения и счета на оплату</li>
              <li>интегрировать различные инструменты с платформой</li>
              <li>проводить аналитику сделок</li>
            </ul>
          </div>
          <div>
            <img src={require('../../image/target_dynamic.png')} />
          </div>
        </div>
      </div>
      <OurPartners />
    </div>
  )
}

export default AboutProject