import React, { useEffect, useState } from 'react'
import s from './ListClients.module.css'

import { Button, Table, Modal, Input } from 'antd'
const ListClients = () => {
  const [dataList, setDataList] = useState([
    {
      key: '1',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
    {
      key: '2',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
    {
      key: '3',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
    {
      key: '4',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
    {
      key: '5',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
    {
      key: '6',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
    {
      key: '7',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
    {
      key: '8',
      name: 'ООО "Стройтех"',
      telephone: '+7 800 500-35-65',
      email: 'stroitex@example.com',
      website: 'example.com',
      responsible: 'Краков Андрей Иванович',
    },
  ])
  const [newClient, setNewClient] = useState({
    key: dataList.length + 1,
    name: '',
    telephone: '',
    email: '',
    website: '',
    responsible: '',
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
      title: 'Название',
      dataIndex: 'name',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Телефон',
      dataIndex: 'telephone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Сайт',
      dataIndex: 'website',
    },
    {
      title: 'Ответственное лицо',
      dataIndex: 'responsible',
    },
  ]

  useEffect(() => {
    setNewClient({
      key: dataList.length + 1,
      name: '',
      telephone: '',
      email: '',
      website: '',
      responsible: '',
    })
  }, [sbr])
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Список клиентов</span>
        <div style={{ width: '100%' }}>
          <Button className={s.addClineBTN} onClick={showModal}>
            Добавить
          </Button>
        </div>
      </div>
      <div>
        <Table
          className="tableList"
          rowSelection={{
            type: 'checkbox',
          }}
          columns={columns}
          dataSource={dataList}
        />
      </div>
      <Modal
        title="новый клиент"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={s.flxInp}>
          <Input
            placeholder="Название"
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
          />
          <Input
            placeholder="Телефон"
            value={newClient.telephone}
            onChange={(e) =>
              setNewClient({ ...newClient, telephone: e.target.value })
            }
          />
          <Input
            placeholder="Email"
            value={newClient.email}
            onChange={(e) =>
              setNewClient({ ...newClient, email: e.target.value })
            }
          />
          <Input
            placeholder="Сайт"
            value={newClient.website}
            onChange={(e) =>
              setNewClient({ ...newClient, website: e.target.value })
            }
          />
          <Input
            placeholder="Ответственное лицо"
            value={newClient.responsible}
            onChange={(e) =>
              setNewClient({ ...newClient, responsible: e.target.value })
            }
          />
        </div>
      </Modal>
    </div>
  )
}

export default ListClients
