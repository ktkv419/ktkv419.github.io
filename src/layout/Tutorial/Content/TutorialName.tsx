import ProgressDots from '../../../components/ProgressDots/ProgressDots'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tg } from '../../..'

const TutorialName = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  return (
    <div className="tutorial">
      <div className="tutorial__content">
        <img src="/name.png" className="tutorial__img" alt="" />
        <ProgressDots allSteps={5} currStep={4} />
      </div>
      <div className="tutorial__text">
        <h1 className="tutorial__title">Давайте знакомиться!</h1>
        <p className="tutorial__desc">
          <Input
            autoFocus
            className="tutorial__input"
            label="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
      </div>
      <div className="tutorial__btn-container">
        <Button
          disabled={name.trim().length === 0}
          onClick={() => {
            navigate('/debug', { state: { debugData: tg.initData } })
          }}
        >
          Продолжить
        </Button>
      </div>
    </div>
  )
}

export default TutorialName
