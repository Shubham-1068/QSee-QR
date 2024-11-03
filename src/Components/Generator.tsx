import { useState } from 'react'
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';

function Generator() {
  const [value, setValue] = useState("Retry with some value !!!");

  function downloadQR(): void {
    const canvas: any = document.querySelector("#canvas");
    if (canvas) {
      html2canvas(canvas).then((canvas) => {
        const data = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = data;
        a.download = `Qrcode-(${value}).png`;
        a.click();
      })
    }
  }

  return (
    <>
      <div className="fixed top-10 w-screen h-screen flex justify-center items-center overflow-auto flex-col">

        <p className='mb-3 text-2xl font-bold text-center'>Generate QR Code</p>

        <div className='w-[90%] h-[78%] bg-slate-300 flex items-center flex-col rounded-xl gap-[8%] pt-16'>

          <div className="w-[95%] mx-auto flex justify-around items-center">
            <div className="sm:max-w-[280px] max-w-[280px] w-[60vw] h-auto bg-white rounded-xl">
              <div id='canvas' className="p-2">
                <div className='p-2 border-[7px] border-black rounded-xl' >
                  <QRCode
                    size={200}
                    className="w-full h-full -p-2 bg-white"
                    value={value}
                    viewBox={`0 0 256 256`}
                    level="Q"
                  />
                </div>
              </div>
            </div>

            <button className='text-white bg-[#FF5722] p-3 rounded-lg font-semibold flex gap-3 justify-center items-center' onClick={() => { downloadQR() }}><p className='md:block hidden text-lg'>Download</p><Download color='white' size={22} /></button>
          </div>

          <div className="flex justify-center items-center flex-col">
            <p className='mb-3 text-lg font-semibold'>Place your text/link below</p>

            <input type="text" onChange={(e) => setValue(e.target.value)} className='w-[70vw] min-h-[10%] bg-white border-2 p-3 border-[#FF5722] text-center font-semibold rounded-lg outline-none' />

          </div>
        </div>
      </div>
    </>
  )
}

export default Generator
