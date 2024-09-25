import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const Modal = ({ imgUrl, setClose }) => {
  
  const handleDownload = () => {
    const link = document.createElement('a'); 
    link.href = imgUrl;                  
    link.download = 'screenshot.png';  
    document.body.appendChild(link);  
    link.click();                      
    document.body.removeChild(link); 
  };

  return (
    <div className='modalScreenShort'>
      <div className='topTitle'>
        <p>This is your screenshot</p>
        <div className="crose" onClick={() => setClose((e) => !e)}><RxCross2 /></div>
      </div>
      <div className="imgShow">
        <img src={imgUrl} alt="Screenshot" />
      </div>
      <div className="submit">
        <button className="button-6" role="button" onClick={handleDownload}>Download</button>
      </div>
    </div>
  )
}

export default Modal;
