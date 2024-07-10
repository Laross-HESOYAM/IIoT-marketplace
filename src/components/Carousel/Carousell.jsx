import React from 'react'
import s from './Carousell.module.css'

import { Carousel, Button } from 'antd'
const Carousell = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <Carousel className={s.carouselMain} afterChange={onChange}>
      <div className={`${s.carD} ${s.cd1}`}>
        <span className={`${s.spnReg} fontSiz_60`}>
          IIoT.Istok TKMP — маркетплейс производителей инструмента и оснастки
        </span>
        <Button type="primary" className={s.btnREG}>
          Зарегистрироваться
        </Button>
      </div>
      <div className={`${s.carD} ${s.cd2}`}>
        <span className={`${s.spnReg} fontSiz_60`}>
          IIoT.Istok TKMP — Загрузка каталогов или отдельных позиций в
          IIoT.Istok TDM с учетом НСИ
        </span>
      </div>
      <div className={`${s.carD} ${s.cd3}`}>
        <span className={`${s.spnReg} fontSiz_60`}>
          Эффективное управление данными и графикой, включая интуитивно понятную
          сборку 3D-инструментов
        </span>
      </div>
    </Carousel>
  )
}

export default Carousell
