import React from 'react'
import { IItem } from '../../utils/types'
import './MenuItem.scss'
import Favorite from '../Favorite/Favorite'

const MenuItem = ({
  item_id,
  name,
  cost,
  favorite,
  image_url,
  background_url,
}: IItem) => {
  return (
    <div className="menu-item">
      <Favorite
        item_id={item_id}
        className="menu-item__favorite"
        value={favorite}
      />
      <img
        src={image_url}
        alt="Картинка товара"
        className="menu-item__picture"
      />
      <img
        src={background_url}
        alt="Задний фон"
        className="menu-item__background"
      />
      <h3 className="menu-item__title">{name}</h3>
      <h3 className="menu-item__price">
        {cost.toFixed(2).replace(/\./, ',')}₽
      </h3>
    </div>
  )
}

export default MenuItem
