import React, { useState } from 'react'
import s from './MenuModel.module.css'
import { Link } from 'react-router-dom'
import Registration from '../Registration/Registration'
//!ANTD
import { Input, Button, Modal } from 'antd'
import { Asterisk, LockKeyhole, User } from 'lucide-react'
const MenuModel = ({ toglClass, setToglClass, setUserName, setRole }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/users/${user}`,
        {
          method: 'GET',
        }
      )

      if (response.ok) {
        const result = await response.json()
        console.log(result)
        localStorage.setItem('access', result.role)
        localStorage.setItem('userName', result.name)
        setUserName(result.name)
        setRole('seller')
        setToglClass(false)
        // localStorage.setItem('user', user)
      }
      if (response.status === 401) {
        setUser()
        setPass()
        console.log('error', response.status)
      }
    } catch (error) {
      console.log(error)
      error === '' ? alert('Ошибка:', error) : alert('ERR_CONNECTION_TIMED_OUT')
    }
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
        <form className={s.chMen_1} onSubmit={handleSubmit}>
          <div className={s.chMen_2}>
            <div className={s.chMFl}>
              <span className="fontSiz_16_500">
                E-mail <Asterisk color="red" style={{ width: '16px' }} />
              </span>
              <Input
                className={`${s.userFrm} inpGlob`}
                placeholder="Имя пользователя"
                type="text"
                name="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
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
          <button type="submit" className={`${s.btnMenu} ${s.btnM1}`}>
            Войти
          </button>
          <Button
            className={`${s.btnMenu} ${s.btnM2}`}
            onClick={() => {
              setToglClass(false)
              showModal()
            }}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  )
}

export default MenuModel
