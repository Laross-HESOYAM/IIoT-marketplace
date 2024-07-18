import React, { useState, useEffect } from 'react'
import s from './Staff.module.css'

import { Button, Table, Modal, Input, Select } from 'antd'
import { render } from '@testing-library/react'

import { ReactComponent as EdditSVG } from '../../image/Edit_light.svg'
import { Asterisk } from 'lucide-react'
const Staff = () => {
  const { Search } = Input
  const [dataList, setDataList] = useState([
    {
      key: '1',
      name: 'Ксения Потапова',
      status: 'Активен',
      role: 'Администратор',
      email: 'potapova@gmail.com',
    },
  ])
  const [newClient, setNewClient] = useState({
    key: dataList.length + 1,
    name: '',
    status: '',
    role: '',
    email: '',
  })
  const [sbr, setSbr] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
    console.log(newClient)
    setDataList([...dataList, newClient])
    setSbr(!sbr)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
    setSbr(!sbr)
  }
  const columns = [
    {
      title: '',
      dataIndex: 'red',
      render: (text) => (
        <Button type="text">
          <EdditSVG />
        </Button>
      ),
      width: '5%',
    },
    {
      title: 'Название',
      dataIndex: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      render: (text) => {
        return (
          <div className={s.statTabl}>
            <span>{text}</span>
          </div>
        )
      },
    },
    {
      title: 'Роль',
      dataIndex: 'role',
      render: (text) => {
        return (
          <div className={s.rolTabl}>
            <span>{text}</span>
          </div>
        )
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ]

  useEffect(() => {
    setNewClient({
      key: dataList.length + 1,
      name: '',
      role: '',
      email: '',
    })
  }, [sbr])
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Сотрудники</span>
        <div style={{ width: '100%' }}>
          <Search
            placeholder="Поиск"
            className={`${s.searchHead} searchHeadG`}
            //   prefix={<UserOutlined />}
          />
          <Button className={s.addClineBTN} onClick={showModal}>
            Добавить сотрудника
          </Button>
        </div>
      </div>
      <div>
        <Table className="tableList" columns={columns} dataSource={dataList} />
      </div>
      <Modal
        title="Добавить сотрудника"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // width={'80%'}
      >
        <div className={s.flxInp}>
          <div>
            <label htmlFor="" className={s.labFlex}>
              <span className="fontSiz_16_400Blc">ФИО</span>{' '}
              <Asterisk
                color="red"
                style={{ width: '14px', paddingBottom: '10px' }}
              />
            </label>
            <Input
              className={s.inptStaff}
              placeholder="ФИО"
              value={newClient.name}
              required
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="" className={s.labFlex}>
              <span className="fontSiz_16_400Blc">Роль</span>{' '}
              <Asterisk
                color="red"
                style={{ width: '14px', paddingBottom: '10px' }}
              />
            </label>
            <Select
              placeholder="Роль"
              className={s.selectStaff}
              defaultValue="Роль"
              onChange={(val) => setNewClient({ ...newClient, role: val })}
              //   onChange={handleChange}
              options={[
                {
                  value: 'Администратор',
                  label: 'Администратор',
                },
                {
                  value: 'Продавец',
                  label: 'Продавец',
                },
                {
                  value: 'Менеджер',
                  label: 'Менеджер',
                },
              ]}
            />
          </div>
          <div>
            <label htmlFor="" className={s.labFlex}>
              <span className="fontSiz_16_400Blc">E-mail </span>
              <Asterisk
                color="red"
                style={{ width: '14px', paddingBottom: '10px' }}
              />
            </label>
            <Input
              className={s.inptStaff}
              placeholder="E-mail"
              value={newClient.email}
              onChange={(e) =>
                setNewClient({ ...newClient, email: e.target.value })
              }
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Staff
