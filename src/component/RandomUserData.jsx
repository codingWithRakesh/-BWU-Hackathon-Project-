import React, { useEffect } from 'react'
import { useTopLoader } from '../contexts/topLoaderContext'

const RandomUserData = () => {
  const [[progress, setProgress]] = useTopLoader()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [setProgress])
  return (
    <div className='hero'>R</div>
  )
}

export default RandomUserData