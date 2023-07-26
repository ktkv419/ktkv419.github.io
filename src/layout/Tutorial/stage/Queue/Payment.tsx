import Button from '../../../../components/Button/Button'
import { ITutorialProps } from '../../Tutorial'
import { AnimatePresence, motion } from 'framer-motion'
import { nanoid } from '@reduxjs/toolkit'
import ProgressDots from '../../../../components/ProgressDots/ProgressDots'

const Payment = ({ setStage, stage }: ITutorialProps) => {
  return (
    <AnimatePresence>
      {stage === 'payment' && (
        <motion.div
          key={nanoid()}
          initial={{ x: '100vw' }}
          animate={{ x: '0vw' }}
          exit={{ x: '-100vw' }}
          transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
          className="tutorial tutorial--queue"
        >
          <div className="tutorial__content">
            <img src="/readiness.png" className="tutorial__img" alt="" />
            <ProgressDots allSteps={5} currStep={4} />
            <div className="tutorial__text">
              <h1 className="tutorial__title">Оплачивайте в приложении!</h1>
              <p className="tutorial__desc">
                Оплачивайте заказы банковской картой сразу в приложении и
                получайте электронные чеки.
              </p>
            </div>
          </div>
          <div className="tutorial__btn-container">
            <Button
              onClick={() => {
                setStage('name')
              }}
            >
              Продолжить
            </Button>
            <Button
              type="light"
              onClick={() => {
                setStage('name')
              }}
            >
              Пропустить
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Payment
