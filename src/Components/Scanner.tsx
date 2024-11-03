import { useState, useEffect } from 'react'
import { QrReader } from 'react-qr-reader'
import { ExternalLink } from 'lucide-react';

function Scanner() {
  const [data, setdata] = useState('Waiting for scan...');
  const result: any = document.getElementById('result');
  const link: any = document.getElementById('link');

  useEffect(() => {

    if (data != 'Waiting for scan...') {
      handleResult();
    }

  }, [data]);

  function handleResult(): void {
    if (result) {
      result.innerHTML = data;
      result.style.border = '3px solid green';
      link.classList.remove('hidden');
      link.classList.add('flex');
    }
  }


  return (
    <>
      <div className="fixed top-10 w-screen h-[97vh] flex justify-center items-center overflow-auto flex-col">

        <p className='mb-3 text-2xl font-bold text-center'>Scan QR Code</p>

        <div className='w-[90%] h-[78%] bg-slate-300 flex items-center flex-col rounded-xl gap-[5%] justify-center'>

          <div className="sm:w-[380px] w-[65vw] h-auto">
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

            <a id='link' href={data} target='_blank' className='hidden justify-center items-center font-semibold p-1 px-4 bg-green-700 rounded-lg text-white md:-mt-2 md:mb-2'>Visit<ExternalLink size={20} fontWeight={"bold"} /></a>

          <div id='result' className="max-w-[85%] min-h-[42px] max-h-[200px] overflow-hidden text-center p-2 rounded-xl border-[3px] border-red-500 break-words font-semibold text-sm sm:-mt-5" onChange={handleResult}>{data}</div>
        </div>
      </div>
    </>
  )
}

export default Scanner
