// TODO
// 1. Libraries for validating names
import React, { SetStateAction, useState } from 'react'
import './Onboarding.scss'
import OnboardingScreen, {
  ITutorialContentProps,
} from './Content/Onboarding--screen'
import OnboardingName from './Content/Onboarding--name'

const image = ['/queue.png', '/closest.png', '/readiness.png', '/payment.png']

const title = [
  `Заказывайте без очереди`,
  'Выберите удобную кофейню',
  'Отслеживайте готовность',
  'Оплачивайте в приложении',
]

const desc = [
  <>
    Оформите заказ в приложении
    <br />и заберите его без очереди
  </>,
  <>
    При оформлении заказа
    <br />
    выберите подходяющую кофейню
  </>,
  <>
    После оформления заказа следите
    <br />
    за статусом готовности заказа
  </>,
  <>
    Моментально плачивайте заказы
    <br />
    банковской картой
  </>,
]

const Onboarding = () => {
  const [stage, setStage] = useState<number>(0)

  const tutorialContentProps = {
    stage,
    setStage,
    desc: desc[stage],
    title: title[stage],
    image: `/onboarding/${stage + 1}.svg`,
  } as ITutorialContentProps

  return (
    <section className="onboarding-container">
      {stage === 4 ? (
        <OnboardingName />
      ) : (
        <OnboardingScreen {...tutorialContentProps} />
      )}
    </section>
  )
}

export default Onboarding
