import { nanoid } from '@reduxjs/toolkit'
import ProgressDots from '../../../components/ProgressDots/ProgressDots'
import Button from '../../../components/Button/Button'
import { Dispatch, SetStateAction } from 'react'
import ButtonLight from '../../../components/ButtonLight/ButtonLight'

export interface ITutorialContentProps {
  stage: number
  setStage: Dispatch<SetStateAction<number>>
  title: string
  desc: JSX.Element
  image: string
}

const OnboardingScreen = ({
  setStage,
  stage,
  title,
  desc,
  image,
}: ITutorialContentProps) => {
  return (
    <div key={nanoid()} className="onboarding">
      <div className="onboarding__content">
        <img src={image} className="onboarding__img" alt="" />
        <ProgressDots currStep={stage} />
      </div>
      <div className="onboarding__text">
        <h1 className="onboarding__title">{title}</h1>
        <p className="onboarding__desc">{desc}</p>
      </div>
      <div className="onboarding__btn-container">
        <Button
          onClick={() => {
            setStage((stage) => (stage += 1))
          }}
        >
          Продолжить
        </Button>
        <ButtonLight
          onClick={() => {
            setStage(4)
          }}
        >
          Пропустить <img src="/icons/arrow.svg" alt="" />
        </ButtonLight>
      </div>
    </div>
  )
}

export default OnboardingScreen
