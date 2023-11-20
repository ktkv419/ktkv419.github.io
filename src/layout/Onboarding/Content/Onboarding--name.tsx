import ProgressDots from '../../../components/ProgressDots/ProgressDots'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonLight from '../../../components/ButtonLight/ButtonLight'
import { tg } from '../../../App'

const OnboardingName = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  return (
    <form style={{ height: '100%' }}>
      <div className="onboarding">
        <div className="onboarding__content">
          <img src="/onboarding/5.svg" className="onboarding__img" alt="" />
        </div>
        <div className="onboarding__text">
          <h1 className="onboarding__title">Давайте знакомиться!</h1>
          <p className="onboarding__desc">
            <Input
              autoFocus
              className="onboarding__input"
              label="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
        </div>
        <div className="onboarding__btn-container">
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              navigate('/debug', { state: { debugData: tg.initData } })
            }}
          >
            Продолжить
          </Button>
          <div style={{ visibility: 'hidden' }}>
            <ButtonLight onClick={() => {}}>
              Пропустить <img src="/icons/arrow.svg" alt="" />
            </ButtonLight>
          </div>
        </div>
      </div>
    </form>
  )
}

export default OnboardingName
