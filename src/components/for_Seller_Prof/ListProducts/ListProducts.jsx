import React, { useState } from 'react'
import s from './ListProducts.module.css'
import {
  Button,
  Input,
  InputNumber,
  Form,
  Popconfirm,
  Table,
  Typography,
  Popover,
} from 'antd'
import { ListProdARR } from '../../../Utils/ListProductsARR'
import { EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { render } from '@testing-library/react'
const originData = []
// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   })
// }
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}
const ListProducts = () => {
  const { Search } = Input
  const [form] = Form.useForm()
  const [listArr, setListArr] = useState(ListProdARR)
  const [editingKey, setEditingKey] = useState('')
  const isEditing = (record) => record.key === editingKey
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    })
    setEditingKey(record.key)
  }
  const cancel = () => {
    setEditingKey('')
  }
  const save = async (key) => {
    try {
      const row = await form.validateFields()
      const newData = [...listArr]
      const index = newData.findIndex((item) => key === item.key)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        setListArr(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setListArr(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }
  const content = (
    <div>
      <ul>
        <li>3D</li>
        <li>фото</li>
        <li>сертификат товара</li>
      </ul>
    </div>
  )
  const columns = [
    {
      title: '',
      dataIndex: 'operation',
      width: '15%',
      render: (_, record) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Сохранить
            </Typography.Link>
            <Popconfirm
              title="Уверены, что хотите отменить?"
              onConfirm={cancel}
            >
              <a>Отмена</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            <EditOutlined />
          </Typography.Link>
        )
      },
    },
    {
      title: 'Фото',
      //   dataIndex: 'key',
      //   width: '25%',
      //   editable: true,
      render: () => <div className={s.tableCir}></div>,
    },
    {
      title: 'Артикул',
      dataIndex: 'key',
      //   width: '25%',
      editable: true,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      //   width: '15%',
      editable: true,
      render: (text) => (
        <div className={s.flDivTab}>
          {text}
          {text === 'На доработку' && (
            <Popover content={content} title="Отсутствуют">
              <InfoCircleOutlined />
            </Popover>
          )}
        </div>
      ),
    },
    {
      title: 'Наименование',
      dataIndex: 'name',
      //   width: '20%',
      editable: true,
    },
    {
      title: 'Наличие 3D',
      dataIndex: 'availability3D',
      //   width: '10%',
      editable: true,
    },
    {
      title: 'Дата добавления',
      dataIndex: 'dateAddition',
      //   width: '10%',
      editable: true,
    },
    {
      title: 'Наличие',
      dataIndex: 'availability',
      //   width: '10%',
      editable: true,
    },
  ]
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  return (
    <div className={s.mainDiv}>
      <div className={s.topInfo}>
        <span className="fontSiz_24_500">Список товаров</span>
        <Button>Все</Button>
        <Search placeholder="Поиск" className={`${s.searchHead} searchHeadG`} />
      </div>
      <div>
        <Form form={form} component={false}>
          <Table
            className="tableList"
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={listArr}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
            }}
          />
        </Form>
      </div>
    </div>
  )
}

export default ListProducts
