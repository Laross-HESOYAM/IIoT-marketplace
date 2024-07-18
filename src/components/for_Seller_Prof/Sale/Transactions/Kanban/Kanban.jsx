import React from 'react'
import s from '../Transactions.module.css'
import { Button } from 'antd'
const Kanban = ({ cardTransaction }) => {
  return (
    <>
      <div className={s.boxCHLD}>
        <div className={`${s.firstTitl} ${s.fr1}`}>
          <span className={`${s.spanFlex} fontSiz_16_400Blc`}>
            Первичный контакт
            <span className="fontSiz_12_400">1 сделка </span>
          </span>
        </div>

        {cardTransaction.map((el, i) => {
          console.log(el)
          if (el.type === 'conversation') {
            return (
              <div className={s.cardTrans}>
                <div className={s.cardTitl}>
                  <span className="fontSiz_16_600">EXPO ZONE</span>
                  <span className="fontSiz_14_400">{el.data}</span>
                </div>
                <span className="fontSiz_14_400">{el.user}</span>
                <ul className={s.cardUl}>
                  {el.product.map((elem, i) => {
                    return <li>{elem}</li>
                  })}
                </ul>
                <div>
                  <Button className={s.btnCard}>Покупка</Button>
                </div>
              </div>
            )
          }
        })}
        {/* <div className={`${s.firstTitl} ${s.fr1}`}>
    <span className={`${s.spanFlex} fontSiz_16_400Blc`}>
      Первичный контакт
      <span className="fontSiz_12_400">1 сделка </span>
    </span>
  </div> */}
      </div>
      <div className={s.boxCHLD}>
        <div className={`${s.firstTitl} ${s.fr2}`}>
          <span className={`${s.spanFlex} fontSiz_16_400Blc`}>
            Переговоры
            <span className="fontSiz_12_400">1 сделка </span>
          </span>
        </div>
        {cardTransaction.map((el, i) => {
          console.log(el)
          if (el.type === 'conversation') {
            return (
              <div className={s.cardTrans}>
                <div className={s.cardTitl}>
                  <span className="fontSiz_16_600">EXPO ZONE</span>
                  <span className="fontSiz_14_400">{el.data}</span>
                </div>
                <span className="fontSiz_14_400">{el.user}</span>
                <ul className={s.cardUl}>
                  {el.product.map((elem, i) => {
                    return <li>{elem}</li>
                  })}
                </ul>
                <div>
                  <Button className={s.btnCard}>Покупка</Button>
                </div>
              </div>
            )
          }
        })}
      </div>
      <div className={s.boxCHLD}>
        <div className={`${s.firstTitl} ${s.fr3}`}>
          <span className={`${s.spanFlex} fontSiz_16_400Blc`}>
            Согласование заказа
            <span className="fontSiz_12_400">1 сделка </span>
          </span>
        </div>
        {cardTransaction.map((el, i) => {
          console.log(el)
          if (el.type === 'agreement') {
            return (
              <div className={s.cardTrans}>
                <div className={s.cardTitl}>
                  <span className="fontSiz_16_600">EXPO ZONE</span>
                  <span className="fontSiz_14_400">{el.data}</span>
                </div>
                <span className="fontSiz_14_400">{el.user}</span>
                <ul className={s.cardUl}>
                  {el.product.map((elem, i) => {
                    return <li>{elem}</li>
                  })}
                </ul>
                <div>
                  <Button className={s.btnCard}>Покупка</Button>
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default Kanban
