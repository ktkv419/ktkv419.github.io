import { nanoid } from '@reduxjs/toolkit'
import ProgressDots from '../../../components/ProgressDots/ProgressDots'
import Button from '../../../components/Button/Button'
import { Dispatch, SetStateAction } from 'react'

export interface ITutorialContentProps {
  stage: number
  setStage: Dispatch<SetStateAction<number>>
  title: string
  desc: JSX.Element
  image: string
}

const TutorialContent = ({
  setStage,
  stage,
  title,
  desc,
  image,
}: ITutorialContentProps) => {
  return (
    <div key={nanoid()} className="tutorial">
      <div className="tutorial__content">
        <img src={image} className="tutorial__img" alt="" />
        <ProgressDots allSteps={5} currStep={stage} />
      </div>
      <div className="tutorial__text">
        <h1 className="tutorial__title">{title}</h1>
        <p className="tutorial__desc">{desc}</p>
      </div>
      <div className="tutorial__btn-container">
        <Button
          onClick={() => {
            setStage((stage) => (stage += 1))
          }}
        >
          Продолжить
        </Button>
        <Button
          type="light"
          onClick={() => {
            setStage(4)
          }}
        >
          Пропустить
        </Button>
      </div>
    </div>
  )
}

export default TutorialContent
