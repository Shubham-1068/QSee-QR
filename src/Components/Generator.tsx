import { useState } from 'react'
import QRCode from "react-qr-code";

function Generator() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="fixed top-10 w-screen h-screen flex justify-center items-center overflow-auto flex-col">

        <p className='mb-3 text-2xl font-bold text-center'>Generate QR Code</p>

        <div className='w-[90%] h-[78%] bg-slate-300 flex items-center flex-col rounded-xl gap-[8%] pt-16'>

          <div className="sm:max-w-[280px] max-w-[280px] w-[60vw] h-auto p-2 bg-white rounded-xl">
            <QRCode
              size={200}
              className="w-full h-full p-2 border-[6px] rounded-xl border-black bg-white"
              value={value}
              viewBox={`0 0 256 256`}
              level="Q"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <p className='mb-3 text-lg font-semibold'>Place your text/link below</p>

            <input type="text" onChange={(e) => setValue(e.target.value)} className='w-[70vw] min-h-[10%] bg-transparent border-2 p-3 border-[#FF5722] text-center font-semibold rounded-lg outline-none' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Generator
