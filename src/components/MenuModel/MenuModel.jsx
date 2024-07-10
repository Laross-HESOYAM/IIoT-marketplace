import React, { useState } from 'react'
import s from './MenuModel.module.css'
import { Link } from 'react-router-dom'
import Registration from '../Registration/Registration'
//!ANTD
import { Input, Button, Modal } from 'antd'
import { Asterisk, LockKeyhole, User } from 'lucide-react'
const MenuModel = ({ toglClass, setToglClass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={`${s.menu} ${toglClass ? s.menu_active : ''}`}>
      <Modal
        // title=""
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1070}
        style={{
          top: 20,
        }}
      >
        <Registration handleOk={handleOk} />
      </Modal>
      <div className={s.chMenu}>
        <span className="fontSiz_24_500">Вход </span>
        <div className={s.chMen_1}>
          <div className={s.chMen_2}>
            <div className={s.chMFl}>
              <span className="fontSiz_16_500">
                E-mail <Asterisk color="red" style={{ width: '16px' }} />
              </span>
              <Input
                className={`${s.userFrm} inpGlob`}
                placeholder="Имя пользователя: admin or user"
                prefix={<User color="#1890FF" size={16} />}
                required
              />
            </div>
            <div className={s.chMFl}>
              <span className="fontSiz_16_500">
                Пароль <Asterisk color="red" style={{ width: '16px' }} />
              </span>
              <Input.Password
                className={`${s.passFrm} inpGlob`}
                placeholder="Пароль: PASS1234"
                prefix={<LockKeyhole color="#1890FF" size={16} required />}
              />
            </div>
          </div>
          <div className={s.chMF}>
            <div style={{ width: '50%' }}>
              <input type="checkbox" name="radio" id="rememb" />
              <label
                htmlFor="rememb"
                style={{ paddingLeft: '8px', color: '#000' }}
                className="fontSiz_16_500"
              >
                Запомнить меня
              </label>
            </div>
            <Link
              to="#"
              className="fontSiz_16_500"
              style={{ color: '#8A24F8' }}
            >
              Забыли пароль?
            </Link>
          </div>
          <Button className={`${s.btnMenu} ${s.btnM1}`}>Войти</Button>
          <Button
            className={`${s.btnMenu} ${s.btnM2}`}
            onClick={() => {
              setToglClass(false)
              showModal()
            }}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MenuModel
