import { useState } from 'react'
import './Favorite.scss'

interface IFavorite {
  item_id: string
  value: boolean
  className: string
}

const Favorite = ({ item_id, value, className }: IFavorite) => {
  const [checked, setChecked] = useState(value)

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked)
  }

  return (
    <div className={className + ' favorite'}>
      <input
        type="checkbox"
        name="favorite"
        id={`favorite-${item_id}`}
        checked={checked}
        onChange={onCheck}
        className="favorite__checkbox"
      />
      <label htmlFor={`favorite-${item_id}`}>
        {checked ? (
          <img
            src="/favorite.svg"
            className="favorite__image favorite__image--liked"
            alt=""
          />
        ) : (
          <img src="/favorite-empty.svg" className="favorite__image" alt="" />
        )}
      </label>
    </div>
  )
}

export default Favorite
