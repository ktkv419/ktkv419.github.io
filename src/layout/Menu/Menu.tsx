import React, { useState } from 'react'
import Slider from '../../components/Slider/Slider'
import './Menu.scss'
import { IItem } from '../../utils/types'
import { nanoid } from '@reduxjs/toolkit'
import MenuItem from '../../components/MenuItem/MenuItem'

interface IMenuCategory {
  name: string
  items: IItem[]
}

const Menu = () => {
  const menuMock: IMenuCategory[] = [
    {
      name: 'Кофе',
      items: [
        {
          item_id: nanoid(),
          name: 'Эспрессо',
          cost: 69.0,
          favorite: false,
          image_url: '/CoffeeWhite.png',
          background_url: '/gradient.png',
        },
        {
          item_id: nanoid(),
          name: 'Американо',
          cost: 79.0,
          favorite: false,
          image_url: '/CoffeeWhite.png',
          background_url: '/gradient.png',
        },
        {
          item_id: nanoid(),
          name: 'Капучино',
          cost: 139.0,
          favorite: true,
          image_url: '/CoffeeWhite.png',
          background_url: '/gradient.png',
        },
        {
          item_id: nanoid(),
          name: 'Латте',
          cost: 139.0,
          favorite: false,
          image_url: '/CoffeeWhite.png',
          background_url: '/gradient.png',
        },
        {
          item_id: nanoid(),
          name: 'Флэт Уайт',
          cost: 139.0,
          favorite: true,
          image_url: '/CoffeeWhite.png',
          background_url: '/gradient.png',
        },
      ],
    },
    { name: 'Напитки', items: [] },
    { name: 'Десерты', items: [] },
    { name: 'Салаты', items: [] },
    { name: 'Выпечка', items: [] },
  ]
  const [category, setCategory] = useState(menuMock[0].name)

  const allCategories = menuMock.map((el) => el.name)
  const currentMenu = menuMock.find((el) => el.name === category)?.items

  const renderMenu = (items: IItem[]) => {
    return items?.map((item) => <MenuItem key={nanoid()} {...item} />)
  }

  return (
    <div className="menu">
      <Slider prop={category} setProp={setCategory} items={allCategories} />

      <div className="menu__layout">{renderMenu(currentMenu || [])}</div>
    </div>
  )
}

export default Menu
