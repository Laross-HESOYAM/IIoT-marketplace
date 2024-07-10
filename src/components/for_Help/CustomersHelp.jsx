import React from 'react'
import s from './_for_help.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
const CustomersHelp = () => {
  return (
    <div className={s.itemChildTab}>
      <span className="fontSiz_24_500">Как купить у производителя?</span>

      <span className="fontSiz_16_400Blc">
        Все товары загружаются на платформу непосредственно производителями.
        Только после этого у товара может появиться опция покупки у торговой
        компании. Чтобы купить у производителя, зайдите в карточку выбранного
        товара и нажмите кнопку
        <Link>«В корзину»</Link>.<br></br>Перейдите в корзину, выберете
        количество товара и нажмите на кнопку <Link>«Оформить заказ»</Link>.
        Обычно производители и Торговые компании отвечают на запрос в течение
        двух рабочих дней. Способ оплаты товаров и любые вопросы, связанные с
        оформлением заказов, вы можете уточнить, связавшись с производителем по
        электронной почте.
      </span>

      <Button className={s.btnTabs}>Я не нашел ответ на свой вопрос</Button>
    </div>
  )
}

export default CustomersHelp
