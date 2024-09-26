import { QRCodeCanvas } from 'qrcode.react'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from 'react'
import { RxCross2 } from 'react-icons/rx'

const ModalQr = ({ info,setCheckQR }) => {
    const qrRef = useRef();

    const downloadQRCodeAsPDF = () => {
    const qrElement = qrRef.current;
    if (!qrElement) return;

    html2canvas(qrElement, { scale: 3 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF();
        const imgWidth = 150;
        const imgHeight = imgWidth;

        pdf.addImage(imgData, "PNG", 15, 40, imgWidth, imgHeight);
        pdf.text(15, imgHeight + 60, info);
        pdf.save("qrcode_with_info.pdf");
    }).catch((error) => {
        console.error("Error generating QR code PDF:", error);
    });
};

    
    return (
        <div className='modalQr'>
            <div className="croseIcon" onClick={()=>setCheckQR((e)=>!e)}>
                <RxCross2 />
            </div>
            <p>QR Code : </p>
            <div ref={qrRef} className="qrBoxShow">
            <QRCodeCanvas value={info} size={256} />
            </div>
            <button onClick={downloadQRCodeAsPDF} className="button-6" role="button">Download</button>
        </div>
    )
}

export default ModalQr