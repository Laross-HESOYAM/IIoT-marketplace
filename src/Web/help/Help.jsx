import React, { useState, useEffect } from 'react'
import s from './Help.module.css'
// import { Outlet, useLocation, Link } from 'react-router-dom'
//! COMPONENTS
import CustomersHelp from '../../components/for_Help/CustomersHelp'
import Manufacturer_Instructions from '../../components/for_Help/Manufacturer_Instructions'
import TradingCompany_Instructions from '../../components/for_Help/TradingCompany_Instructions'
import AboutProject from '../../components/for_Help/AboutProject'
import Legal_Information from '../../components/for_Help/Legal_Information'
import ProblemSolving from '../../components/for_Help/ProblemSolving'
// //! REDUX
// import { useDispatch } from 'react-redux'
// import { addBread } from '../../store/breadcrumbSlice'
//! ANTD
import { Button, Menu, ConfigProvider } from 'antd'
const Help = () => {
  const [current, setCurrent] = useState('customers')
  const onClick = (e) => {
    console.log('click ', e.key)
    setCurrent(e.key)
  }

  const items = [
    {
      label: 'Покупателям',
      key: 'customers',
      // icon: <MailOutlined />,
    },
    {
      label: 'Поставщикам',
      key: 'suppliers',
      children: [
        {
          label: 'Инструкция для производителя',
          key: 'Manufacturer',
        },
        {
          label: 'Инструкция для торговой компании',
          key: 'tradingCompany',
        },
        {
          label: 'Договорные отношения',
          key: 'setting:3',
          disabled: true,
        },
      ],
      // icon: <AppstoreOutlined />,
      // disabled: true,
    },
    {
      label: 'О проекте',
      key: 'aboutProject',
      // icon: <SettingOutlined />,
      // children: [
      //   {
      //     type: 'group',
      //     label: 'Item 1',
      //     children: [
      //       {
      //         label: 'Option 1',
      //         key: 'setting:1',
      //       },
      //       {
      //         label: 'Option 2',
      //         key: 'setting:2',
      //       },
      //     ],
      //   },
      //   {
      //     type: 'group',
      //     label: 'Item 2',
      //     children: [
      //       {
      //         label: 'Option 3',
      //         key: 'setting:3',
      //       },
      //       {
      //         label: 'Option 4',
      //         key: 'setting:4',
      //       },
      //     ],
      //   },
      // ],
    },
    {
      label: 'IIoT.Istok TDM',
      key: 'TDM',
      disabled: true,
    },
    {
      label: 'Правовая информация',
      key: 'Legal',
    },
    {
      label: 'Решение проблем',
      key: 'Problem',
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
        {current === 'customers' && <CustomersHelp />}
        {current === 'Manufacturer' && <Manufacturer_Instructions />}
        {current === 'tradingCompany' && <TradingCompany_Instructions />}
        {current === 'aboutProject' && <AboutProject />}
        {current === 'Legal' && <Legal_Information />}
        {current === 'Problem' && <ProblemSolving />}
      </div>
    </div>
  )
}

export default Help
