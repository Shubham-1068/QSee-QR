import React from 'react'
import { useState, useEffect } from 'react'
import { QrReader } from 'react-qr-reader'
import { ExternalLink } from 'lucide-react'

function Scanner() {
  const [data, setdata] = useState('Waiting...');
  const result: any = document.getElementById('result');

  useEffect(() => {

    if (data != 'Waiting...') {
      handleResult();
    }

  }, [data]);

  function handleResult(): void {
    if (result) {
      result.innerHTML = '<p class="text-xl font-bold text-center underline mb-2">Visit</p> ' + data;
      result.style.border = '4px solid green';
    }
  }


  return (
    <>
      <div className="fixed top-10 w-screen h-screen flex justify-center items-center overflow-auto">
        <div className='w-[90%] h-[80%] bg-slate-300 flex items-center flex-col rounded-xl gap-[5%]'>

          <p className='mt-8 text-2xl font-bold text-center'>Scan QR Code</p>

          <div className="mt-7 sm:w-[380px] w-[65vw] h-auto">
          <QrReader
            constraints={{ facingMode: 'environment' }}
            onResult={(result, error) => {
              if (!!result) {
                setdata(result.getText());
              }

              if (!!error) {
                console.info(error);
              }
            }}
            className='h-full w-full -mt-16'

          />
          </div>

          <a id='result' href={data} target="_blank" className="max-w-[85%] min-h-[50px] text-center p-3 rounded-xl border-4 border-red-500 hover:bg-slate-200 break-words font-semibold text-sm sm:-mt-5" onChange={handleResult}>Waiting...</a>
        </div>
      </div>
    </>
  )
}

export default Scanner
