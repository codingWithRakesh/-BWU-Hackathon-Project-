import React, { useEffect, useState } from 'react'
import { useTopLoader } from '../contexts/topLoaderContext'
import Modal from './Modal'
import loader from '../assets/loader/loader.gif'

const WebScreenshot = () => {
  const [[progress, setProgress]] = useTopLoader()
  const [inputData, setInputData] = useState('')
  const [imgUrl, setImgUrl] = useState('') 
  const [close, setClose] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [setProgress])

  const getImg = async () => {
    setLoading(true)
    const response = await fetch(
      `https://screenshot.abstractapi.com/v1/?api_key=a8059f9bd36b4959b96804e9e21d1eac&url=${inputData}`
    )
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    setImgUrl(imgUrl);
    setLoading(false)
    setClose(true)
  }

  return (
    <div className='hero webScreenshot'>
      <div className="webScreenshotBox">
        <p>
          Enter Your Website URL
        </p>
        <input value={inputData} placeholder='Enter URL' onChange={(e) => setInputData(e.target.value)} type="text" />
        <button className="button-6" role="button" onClick={getImg}>{loading ? <img src={loader}/> : "Click"}</button>
      </div>
      {close && <Modal setClose={setClose} close={close} imgUrl={imgUrl}/>}
    </div>
  )
}

export default WebScreenshot
