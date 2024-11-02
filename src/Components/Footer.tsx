
function Footer() {
  return (
    <>
      <div className="fixed bottom-0 w-screen h-14 bg-[#FF5722] cursor-pointer">
        <div className="w-screen h-full flex justify-around items-center text-white">
          <p className="text-md font-semibold text-center">@QSee-{new Date().getFullYear()}</p>
          <p className="text-md font-semibold text-center">All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer
