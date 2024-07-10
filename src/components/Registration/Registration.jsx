import React, { useState } from 'react'
import s from './Registration.module.css'
import { Link } from 'react-router-dom'
import {
  Button,
  Input,
  Tooltip,
  AutoComplete,
  InputNumber,
  Segmented,
} from 'antd'
const { Option } = AutoComplete
const Registration = ({ handleOk }) => {
  const [result, setResult] = useState([])
  const handleSearch = (value) => {
    let res = []
    if (!value || value.indexOf('@') >= 0) {
      res = []
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(
        (domain) => `${value}@${domain}`
      )
    }

    setResult(res)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.wrpchld}>
        <span className="fontSiz_32_500">Регистрация</span>
        <div className={s.radio_frm}>
          <div className={s.radio_container}>
            {/* <Segmented
              options={['buyer', 'seller']}
              onChange={(value) => {
                console.log(value) // string
              }}
            /> */}
            {/* <input
              type="radio"
              name="radio"
              value={1}
              id="buyer"
              //   onChange={(e) => onChange(e.target.value)}
              defaultChecked
            />
            <label htmlFor="buyer">Для покупателя</label>
            <input
              type="radio"
              name="radio"
              value={2}
              id="seller"
              //   onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor="seller">Для производителя</label> */}
          </div>
        </div>
        <div className={s.infoReg}>
          <span className="fontSiz_16_400Blc">
            Уважаемые производители! Для регистрации Вам необходимо заполнить
            форму заявки. После обработки заявки Вам придет уведомление на
            электронную почту.
          </span>
        </div>
        <div className={s.inputGrp}>
          <div className={`${s.inpGrp1} ${s.inpGrpChld}`}>
            <div className={s.inputGrpCh}>
              <label className="fontSiz_16_400Blc" htmlFor="email">
                Логин / E-mail
              </label>
              {/* <input type="email" id="email" /> */}
              <AutoComplete
                className={s.inAutoReg}
                style={{
                  height: '5vh',
                }}
                onSearch={handleSearch}
                placeholder="email"
              >
                {result.map((email) => (
                  <Option key={email} value={email}>
                    {email}
                  </Option>
                ))}
              </AutoComplete>
            </div>
            <div className={s.inputGrpCh}>
              <label className="fontSiz_16_400Blc" htmlFor="country">
                Страна
              </label>
              <Input placeholder="Страна" id="country" />
            </div>
            <div className={s.inputGrpCh}>
              <label className="fontSiz_16_400Blc" htmlFor="inn">
                ИНН
              </label>
              {/* <input type="number" id="inn" /> */}
              <InputNumber
                placeholder="ИНН"
                min={1}
                max={9999999999}
                id="inn"
                style={{ height: '5vh' }}
              />
            </div>
          </div>
          <div className={`${s.inpGrp2} ${s.inpGrpChld}`}>
            <div className={s.inputGrpCh}>
              <label className="fontSiz_16_400Blc" htmlFor="web">
                Сайт
              </label>
              {/* <input type="text" id="web" /> */}
              <Input placeholder="Сайт" id="web" />
            </div>
            <div className={s.inputGrpCh}>
              <label className="fontSiz_16_400Blc" htmlFor="fio">
                ФИО
              </label>
              <Input placeholder="ФИО" id="fio" />
            </div>
            <div className={s.inputGrpCh}>
              <label className="fontSiz_16_400Blc" htmlFor="telephone">
                Телефон
              </label>
              <Input placeholder="Телефон" id="telephone" />
            </div>
          </div>
        </div>
        <div className={s.cheakboxReg}>
          <div className={s.cheak_1reg}>
            <input type="checkbox" name="radio" id="agree_1" />
            <label htmlFor="agree_1">
              Я согласен (согласна) на обработку моих персональных данных в
              соответствии с условиями&nbsp;
              <Link
                to="#"
                className="fontSiz_16_400Blc"
                style={{ color: '#8A24F8' }}
              >
                «Политики конфиденциальности»
              </Link>
            </label>
          </div>
          <div className={s.cheak_2reg}>
            <input type="checkbox" name="radio" id="agree_2" />
            <label htmlFor="agree_2">
              Я ознакомился (ознакомилась) и принимаю&nbsp;
              <Link
                to="#"
                className="fontSiz_16_400Blc"
                style={{ color: '#8A24F8' }}
              >
                «Условия использования Платформы»
              </Link>
            </label>
          </div>
        </div>
        <div className={s.btnSub}>
          <Button type="primary" className={s.subReg} onClick={handleOk}>
            Отправить заявку{' '}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Registration
