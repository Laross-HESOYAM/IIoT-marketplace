import React, { useEffect, useState } from 'react'
import s from './Header.module.css'

import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { Outlet, useNavigate } from 'react-router-dom'
import {
  AppstoreOutlined,
  CloseOutlined,
  EnvironmentOutlined,
  LogoutOutlined,
  ProductOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { Button, Input, Dropdown, ConfigProvider } from 'antd'
import { FactoryIcon } from 'lucide-react'
const { Search } = Input
const Header = ({ setToglClass, toglClass }) => {
  const locations = useLocation()
  console.log(locations.pathname)
  const [katalogBTN, setKatalogBTN] = useState(false) //Кнопка для Каталога
  const navigation = useNavigate()
  localStorage.setItem('user', 'guest')
  console.log(katalogBTN, 'katalogBTN')
  useEffect(() => {
    !katalogBTN ? navigation('/') : navigation('/catalog')
  }, [katalogBTN])
  const items = [
    {
      label: (
        <Link to="buyerProfile">
          <UserOutlined /> Пользователь
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to="/">
          <LogoutOutlined /> Выйти
        </Link>
      ),
      key: '1',
    },
    // {
    //   type: 'divider',
    // },
  ]
  return (
    <header className={s.mainHeader}>
      <div className={s.divHead1}>
        <div className={s.chldDivH1}>
          <span style={{ color: 'white', paddingRight: '40px' }}>LOGO</span>
          <Button
            type="primary"
            icon={!katalogBTN ? <ProductOutlined /> : <CloseOutlined />}
            className={s.btnKatalog}
            to="catalog"
            onClick={() => {
              setKatalogBTN(!katalogBTN)
            }}
          >
            Каталог
          </Button>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: 'transparent',
                  colorBorder: '#DCFF00',
                  colorPrimaryHover: '#DCFF00',
                  colorText: '#fff',
                  borderRadius: '8px',
                  fontSize: '16px',
                  paddingBlock: 6,
                },
                token: {
                  // activeBorderColor: 'red',
                  // activeShadow: 'red',
                  // hoverBorderColor: 'red',
                },
              },
            }}
          >
            <Search
              placeholder="Поиск"
              className={`${s.searchHead} searchHeadG`}
            />
          </ConfigProvider>
        </div>
        <div className={s.chldDivH2}>
          <Button
            className={`${s.btnMoscow} ${s.btnStyle}`}
            type="text"
            icon={<EnvironmentOutlined />}
          >
            Москва
          </Button>
          {localStorage.user === 'guest' ? (
            <Button
              className={` ${s.btnStyle}`}
              type="text"
              icon={<UserOutlined />}
              onClick={() => setToglClass(!toglClass)}
            >
              Войти
            </Button>
          ) : (
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
              className={` ${s.btnStyle}`}
            >
              <Button type="text" icon={<UserOutlined />}>
                Войти
              </Button>
            </Dropdown>
          )}
          <Link
            to="/help"
            className={` ${s.btnStyle}`}
            style={{
              color: locations.pathname === '/help' ? '#DCFF00' : '#fff',
            }}
            type="text"
          >
            Помощь
          </Link>

          <Button className={` ${s.btnStyle}`} type="text">
            Контакты
          </Button>
        </div>
      </div>
      <div className={s.divHead2}>
        <div className={s.grpBtnHed2}>
          <Link to="#">
            <Button
              type="text"
              icon={<FactoryIcon size={19} />}
              className={`${s.factoryBTN} ${s.btnStyle}`}
            >
              Производители
            </Button>
          </Link>
          <Button
            type="text"
            icon={<UserAddOutlined />}
            className={`${s.btnStyle}`}
          >
            Посетители
          </Button>
          <Link to="#">
            <Button type="text" className={`${s.btnStyle}`}>
              Запрос на изготовление
            </Button>
          </Link>
          <Link to="#">
            <Button type="text" className={`${s.btnStyle}`}>
              Запрос на ремонт
            </Button>
          </Link>
          <Link to="#">
            <Button type="text" className={`${s.btnStyle}`}>
              Услуги
            </Button>
          </Link>
        </div>
        <div>
          <Button type="primary" className={s.postavshik}>
            Стать поставщиком
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
