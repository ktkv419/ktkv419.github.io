import React, { useState } from 'react'
import Button from '../Button/Button'
import './Slider.scss'
import { nanoid } from '@reduxjs/toolkit'

const menuMock = ['Кофе', 'Напитки', 'Десерты', 'Салаты', 'Выпечка']

const Slider = () => {
  const [currentMenu, setCurrentMenu] = useState('Кофе')
  const onMenuClick = (menu: string) => {
    setCurrentMenu(menu)
  }

  const renderedMenu = menuMock.map((el) => (
    <Button
      key={nanoid()}
      className={`slider__btn ${el === currentMenu && 'slider__btn--active'}`}
      onClick={() => onMenuClick(el)}
    >
      {el}
    </Button>
  ))

  return <div className="slider">{renderedMenu}</div>
}

export default Slider
