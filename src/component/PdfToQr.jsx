import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ModalQr from "./ModalQr";
import { useTopLoader } from "../contexts/topLoaderContext";

const PdfToQr = () => {
  const [info, setInfo] = useState("Your information here");
  const qrRef = useRef();
  const [[progress, setProgress]] = useTopLoader()
  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [setProgress])

  const [checkQR, setCheckQR] = useState(false)

  return (
    <div className="hero">
      <div className="webScreenshotBox qrBox">
        <p>
          QR Code Generator
        </p>
        <textarea value={info} placeholder='Enter information' onChange={(e) => setInfo(e.target.value)} type="text" ></textarea>
        <button className="button-6" role="button" onClick={()=>setCheckQR((e)=>!e)} >Click</button>
      </div>
      {checkQR && <ModalQr setCheckQR={setCheckQR} info={info} />}
    </div>
  );
};

export default PdfToQr;
