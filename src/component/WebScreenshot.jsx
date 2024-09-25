import React, { useEffect } from 'react'
import { useTopLoader } from '../contexts/topLoaderContext'

const WebScreenshot = () => {
  const [[progress, setProgress]] = useTopLoader()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [setProgress])
  return (
    <div className='hero webScreenshot'>
      <div className="webScreenshotBox">
        <p>
          Enter Your Website URL
        </p>
        <input type="text" />
        <button class="button-6" role="button">Click</button>
      </div>
    </div>
  )
}

export default WebScreenshot