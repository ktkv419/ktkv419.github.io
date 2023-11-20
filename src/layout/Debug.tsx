import { useLocation } from 'react-router-dom'
import Button from '../components/Button/Button'
import { tg } from '../App'
import { useState } from 'react'

const Debug = () => {
  const location = useLocation()
  const debugData = JSON.stringify(location.state.debugData)
  tg.MainButton.setText('Test')
  const [dark, setIsDark] = useState(true)
  console.log(dark)
  const setColor = () => (dark ? '#000' : '#fff')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify({
          useragent: window.navigator.userAgent,
          data: debugData,
        })
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className="debug"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: setColor(),
      }}
    >
      {/* {debugData} */}
      <Button
        onClick={() => {
          copy()
        }}
      >
        Сюда
      </Button>
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
      <Button
        onClick={() => {
          setIsDark(!dark)
        }}
      >
        Change color
      </Button>
    </div>
  )
}

export default Debug
