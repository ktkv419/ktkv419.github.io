import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button/Button'
import { tg } from '..'

const Debug = () => {
  const location = useLocation()
  const debugData = JSON.stringify(location.state.debugData)
  tg.MainButton.setText('Test')

  const [testState, setTestState] = useState()

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://dev-voc.ru/api/fake/agents')
      const resJson = await res.json()
      setTestState(resJson)
    })()
  }, [])

  return (
    <div
      className="debug"
      style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
    >
      {debugData}
      {JSON.stringify(testState)}
      <Button
        onClick={() => {
          tg.HapticFeedback.impactOccurred('light')
        }}
      >
        Haptic light
      </Button>
      <Button
        onClick={() => {
          tg.HapticFeedback.impactOccurred('soft')
        }}
      >
        Haptic soft
      </Button>
      <Button
        onClick={() => {
          tg.HapticFeedback.impactOccurred('medium')
        }}
      >
        Haptic medium
      </Button>
      <Button
        onClick={() => {
          tg.HapticFeedback.impactOccurred('heavy')
        }}
      >
        Haptic heavy
      </Button>
      <Button
        onClick={() => {
          tg.HapticFeedback.impactOccurred('rigid')
        }}
      >
        Haptic rigid
      </Button>
    </div>
  )
}

export default Debug
