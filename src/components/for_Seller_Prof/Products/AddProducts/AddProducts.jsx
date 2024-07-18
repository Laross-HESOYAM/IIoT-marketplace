import React, { useEffect, useState } from 'react'
import s from './AddProducts.module.css'
import fileLogo from '../../../../image/file-dynamic.svg'
import folderLogo from '../../../../image/folder-dynamic.svg'
import linkLogo from '../../../../image/link-dynamic.svg'
import likeLogo from '../../../../image/thumb.svg'

import { Button } from 'antd'
import { Link } from 'react-router-dom'

import Manually from './Add/Manually'
const AddProducts = () => {
  const [addProd, setAddProd] = useState()
  useEffect(() => {}, [addProd])
  return (
    <div className={s.mainDiv}>
      {!addProd && (
        <>
          <div className={s.topInfo}>
            <span className="fontSiz_24_500">Добавить товары</span>
            <Button type="text" style={{ color: '#8D24F8' }}>
              Правила добавления товаров
            </Button>
          </div>
          <div className={s.mainFlexWrap}>
            <div className={s.flex_wrap}>
              <div className={s.dochFlex} onClick={() => setAddProd('manull')}>
                <div className={s.topInfo}>
                  <span className="fontSiz_16_500">Вручную</span>
                  <span className={s.dochBTN}>Немного товаров</span>
                </div>
                <div className={s.topInfo} style={{ columnGap: '4vw' }}>
                  <span className="fontSiz_16_400Blc">
                    Подойдёт, если товаров немного. Можно создавать по одному
                    варианту или сразу по несколько
                  </span>
                  <img src={fileLogo} alt="" />
                </div>
              </div>
              <Link className={s.dochFlex} to="throughTemplate">
                <div className={s.topInfo}>
                  <span className="fontSiz_16_500">Через шаблон</span>
                  <span className={s.dochBTN}>Много товаров</span>
                </div>
                <div className={s.topInfo} style={{ columnGap: '4vw' }}>
                  <span className="fontSiz_16_400Blc">
                    Добавьте сразу много товаров одной категории — для этого
                    есть умные таблицы с подсказками
                  </span>
                  <img src={folderLogo} alt="" />
                </div>
              </Link>
            </div>
            <div className={s.flex_wrap}>
              <Link className={s.dochFlex} to="viaAPI">
                <div className={s.topInfo}>
                  <span className="fontSiz_16_500">Через API</span>
                  <span className={s.dochBTN}>Интеграция</span>
                </div>
                <div className={s.topInfo} style={{ columnGap: '4vw' }}>
                  <span className="fontSiz_16_400Blc">
                    Управляйте товарами автоматически — подключите свою систему
                    к личному кабинету
                  </span>
                  <img src={linkLogo} alt="link" />
                </div>
              </Link>
              <Link className={s.dochFlex} to="downloadingPdfCatalog">
                <div className={s.topInfo}>
                  <span className="fontSiz_16_500">Загрузка pdf каталога</span>
                  <span className={s.dochBTN}>ИИ</span>
                </div>
                <div className={s.topInfo} style={{ columnGap: '4vw' }}>
                  <span className="fontSiz_16_400Blc">
                    Загружайте каталог в формате PDF. ИИ распознает товары и
                    добавит в Ваш каталог
                  </span>
                  <img src={likeLogo} alt="like" />
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
      {addProd === 'manull' && <Manually />}
    </div>
  )
}

export default AddProducts