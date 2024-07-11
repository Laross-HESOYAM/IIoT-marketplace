import React, { useState } from 'react'
import s from './_profile.module.css'

//! COMPONENTS
import SellerAccount from '../../components/for_Seller_Prof/SellerAccount/SellerAccount'
import Company_page from '../../components/for_Seller_Prof/Company_page/Company_page'
import AddProducts from '../../components/for_Seller_Prof/AddProducts/AddProducts'
import HistoryAdding from '../../components/for_Seller_Prof/HistoryAdding/HistoryAdding'
//! ANTD
import { Button, Menu, ConfigProvider } from 'antd'
import ListProducts from '../../components/for_Seller_Prof/ListProducts/ListProducts'
const Seller_Profile = () => {
  const [current, setCurrent] = useState('Account')
  const onClick = (e) => {
    console.log('click ', e.key)
    setCurrent(e.key)
  }
  const items = [
    {
      label: 'Аккаунт',
      key: 'Account',
      // icon: <MailOutlined />,
    },
    {
      label: 'Страница компании',
      key: 'Company_page',
    },
    {
      label: 'Товары',
      key: 'Products',
      children: [
        {
          label: 'Добавить товары',
          key: 'AddProducts',
        },
        {
          label: 'Список товаров ',
          key: 'ListProducts',
        },
        {
          label: 'История добавления',
          key: 'HistoryAdding',
          //   disabled: true,
        },
      ],
    },
    {
      label: 'Продажа',
      key: 'Sale',
      //   disabled: true,
    },
    {
      label: 'Сотрудники',
      key: 'Staff',
    },
    {
      label: 'Поддержка',
      key: 'Support',
    },
    {
      label: 'Уведомления',
      key: 'Notifications',
    },
    {
      label: 'Торговые компании',
      key: 'Trading companies',
    },
  ]
  return (
    <div className={s.mainDiv}>
      <ConfigProvider
        theme={{
          token: {
            // HorizontalItemHoverColor: 'red',
            // colorText: 'rgb(123, 124, 125)',
          },
          components: {
            Menu: {
              colorBgElevated: 'rgb(255, 255, 255)',
              itemSelectedColor: 'rgb(141, 36, 248)',
              itemHoverColor: 'rgb(141, 36, 248)',
              itemColor: 'rgb(123, 124, 125)',
              horizontalItemSelectedColor: 'rgb(141, 36, 248)',

              // itemActiveBg: 'red',
              // itemSelectedBg: 'rgb(255, 255, 255)',
            },
          },
        }}
      >
        <Menu
          className={s.mainTabs}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </ConfigProvider>
      <div className={s.mainChaild}>
        {current === 'Account' && <SellerAccount />}
        {current === 'Company_page' && <Company_page />}
        {current === 'AddProducts' && <AddProducts />}
        {current === 'HistoryAdding' && <HistoryAdding />}
        {current === 'ListProducts' && <ListProducts />}
      </div>
    </div>
  )
}

export default Seller_Profile