// TODO
// 1. Libraries for validating names
import React, { SetStateAction, useState } from 'react'
import './Tutorial.scss'
import TutorialContent, {
  ITutorialContentProps,
} from './Content/TutorialContent'
import TutorialName from './Content/TutorialName'

type TStages = 'queue' | 'closest' | 'readiness' | 'payment' | 'name'

export interface ITutorialProps {
  stage: TStages
  setStage: React.Dispatch<SetStateAction<TStages>>
}

const image = ['/queue.png', '/closest.png', '/readiness.png', '/payment.png']

const title = [
  `Заказывайте без очереди!`,
  'Найдите ближайшую кофейню!',
  'Отслеживайте готовность!',
  'Оплачивайте в приложении!',
]

const desc = [
  <>
    Оформите заказ в приложении и<br />
    заберите кофе через пару минут
    <br />
    без ожидания в очереди!
  </>,
  <>
    Откройте приложение и выберите
    <br />
    ближайшую кофейню, чтобы
    <br />
    заказать любимый напиток.
  </>,
  <>
    После оформления заказа Вы можете
    <br />
    следить за статусом готовности Вашего
    <br />
    кофе, напитка или вкусного десерта!
  </>,
  <>
    Оплачивайте заказы банковской картой
    <br />
    сразу в приложении и получайте
    <br />
    электронные чеки.
  </>,
]

const Tutorial = () => {
  const [stage, setStage] = useState<number>(0)
  const tutorialContentProps = {
    stage,
    setStage,
    desc: desc[stage],
    title: title[stage],
    image: image[stage],
  } as ITutorialContentProps

  return (
    <section className="tutorial-container">
      {stage === 4 ? (
        <TutorialName />
      ) : (
        <TutorialContent {...tutorialContentProps} />
      )}
    </section>
  )
}

export default Tutorial
