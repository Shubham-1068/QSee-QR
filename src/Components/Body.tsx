import { Link } from 'react-router-dom'

function Body() {
  return (
    <>
        <div className="fixed md:top-10 top-14 w-screen h-[80vh] flex justify-center items-center">
            <div className="md:w-[600px] w-[230px] md:h-[300px] h-[370px] m-auto border-2 bg-slate-200 rounded-xl flex justify-around items-center relative md:flex-row flex-col">

                {/* section-1 */}

                <Link to={'/scanner'} className='md:w-1/2 w-full h-full'>
                <div className="h-full w-full rounded-xl flex flex-col justify-center items-center hover:bg-slate-300 cursor-pointer">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/scan-icon.png" alt="scanner" className='md:h-28 h-24 border-4 border-[#FF5722] p-3 rounded-xl' />

                    <p className='mt-3 text-lg font-semibold'>Scanner</p>
                </div>
                </Link>

                {/* divider */}

                <div className="absolute md:w-[2%] w-[85%] h-[3%] md:h-[85%] border-[3px] bg-[#FF5722] rounded-xl"></div>

                {/* section-2 */}
                
                <Link to={'/generator'} className='md:w-1/2 w-full h-full'>
                <div className="w-full h-full rounded-xl flex-col flex justify-center items-center hover:bg-slate-300 cursor-pointer">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/qr-code-scan-icon.png" alt="generator" className='md:h-28 h-24 border-4 border-[#FF5722] p-3 rounded-xl' />

                <p className='mt-3 text-lg font-semibold'>Generator</p>
                </div>
                </Link>

            </div>
        </div>
    </>
  )
}

export default Body
