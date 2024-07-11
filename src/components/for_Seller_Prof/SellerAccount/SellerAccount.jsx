import React, { useState } from 'react'
import s from './SellerAccount.module.css'

//! ANTD
import { Button, Input, Modal } from 'antd'
import { Asterisk } from 'lucide-react'
const SellerAccount = () => {
  const [isModalDeled, setIsModalDeled] = useState(false)
  const [isModalChangePass, setIsModalChangePass] = useState(false)
  const showModal = () => {
    setIsModalDeled(true)
  }
  const showModalChangePass = () => {
    setIsModalChangePass(true)
  }
  const handleOk = () => {
    setIsModalDeled(false)
  }
  const handleChangePass = () => {
    setIsModalChangePass(false)
  }
  const handleCancel = () => {
    setIsModalDeled(false)
  }
  const handleCancelPss = () => {
    setIsModalChangePass(false)
  }
  return (
    <div className={s.mainDiv}>
      <Modal
        width={'80%'}
        style={{ padding: '20px' }}
        className="modalDeled"
        // title="Удаление аккаунта"
        open={isModalDeled}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div
            className="fontSiz_32_500"
            style={{ textAlign: 'center', width: '100%' }}
          >
            Удаление аккаунта
          </div>
          <div className={s.delText}>
            <p className="fontSiz_16_400Blc">
              Уважаемые производители! Для удаления аккаунта отправьте заявку. В
              течение двух рабочих дней Вам придет уведомление о статусе заявки
              на электронную почту.
            </p>
          </div>
          <Button type="primary" className={s.btnDelPost} onClick={handleOk}>
            Отправить заявку
          </Button>
        </div>
      </Modal>
      <Modal
        width={'80%'}
        style={{ padding: '20px' }}
        className="modalDeled"
        // title="Удаление аккаунта"
        open={isModalChangePass}
        // onOk={handleOk}
        onCancel={handleCancelPss}
        footer={null}
      >
        <div className={s.fl_jusCen}>
          <div className={s.fl_column}>
            <div
              className="fontSiz_32_500"
              style={{ textAlign: 'center', width: '100%' }}
            >
              Изменение пароля
            </div>
            <div className={s.changePassForm}>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  Старый пароль
                  <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="pass"
                  name="username"
                  required
                />
              </div>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  Новый пароль
                  <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="password"
                  name="username"
                  required
                />
              </div>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  Подтверждение пароля
                  <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="text"
                  name="username"
                  required
                />
              </div>
            </div>
            <Button
              type="primary"
              className={s.btnDelPost}
              style={{ width: '100%' }}
              onClick={handleChangePass}
            >
              Отправить заявку
            </Button>
          </div>
        </div>
      </Modal>
      <span className="fontSiz_24_500">Данные о компании</span>
      <div className={s.d_box}>
        <div className={s.divFR_Btn}>
          <div className={s.divForm}>
            <div className={s.divFormChld}>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  E-mail <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="text"
                  name="username"
                  required
                />
              </div>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  Страна <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="text"
                  name="username"
                  required
                />
              </div>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  ИНН <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="text"
                  name="username"
                  required
                />
              </div>
            </div>
            <div className={s.divFormChld}>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  Сайт
                  <Asterisk color="red" style={{ width: '16px', opacity: 0 }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="text"
                  name="username"
                  required
                />
              </div>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  ФИО <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="text"
                  name="username"
                  required
                />
              </div>
              <div className={s.chMFl}>
                <span className="fontSiz_16_500">
                  Телефон <Asterisk color="red" style={{ width: '16px' }} />
                </span>
                <Input
                  className={s.inputAccaun}
                  placeholder="Имя пользователя"
                  type="text"
                  name="username"
                  required
                />
              </div>
            </div>
          </div>
          <Button className={s.saveAc}>Сохранить</Button>
        </div>
        <div className={s.divSetting}>
          <span className="fontSiz_16_400Blc">Управление аккаунтом</span>
          <span className="fontSiz_16_400Blc">
            Вы с нами с 21 Марта 2024 года
          </span>
          <span
            onClick={showModalChangePass}
            className="fontSiz_16_400Blc"
            style={{ color: 'rgb(141, 36, 248)' }}
            type="text"
          >
            Изменить пароль
          </span>
          <span
            className="fontSiz_16_400Blc"
            style={{ color: 'rgb(141, 36, 248)' }}
            type="text"
          >
            Выйти из аккаунта
          </span>
          <span
            onClick={showModal}
            className="fontSiz_16_400Blc"
            style={{ color: 'rgb(141, 36, 248)' }}
            type="text"
          >
            Удалить аккаунт
          </span>
        </div>
      </div>
    </div>
  )
}

export default SellerAccount
