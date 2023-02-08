import bg from './/../public/TransparentBG.png'
import Link from 'next/link'

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,

        width: '100%'
        // height: '100%'
      }}
      className="flex flex-col md:flex-row-reverse w-screen bg-cover md:justify-between"
    >
      <div className="flex flex-col  bg-white rounded-2xl my-10 mx-5 bg-opacity-50 md:mt-80 justify-end">
        <h1 className="font-bold text-center">Welcome to Allstate Carpets</h1>
        <p className="text-center max-w-lg text-[#ac1010] font-bold ">Let Us Floor You! Serving the DMV area since 1971
        </p>
        <div className='mb-5 mt-5'>
        <Link href='/about' className="text-[#ac1010] font-bold rounded p-2 bg-[#a4614c]">About Us</Link>
        </div>
      </div>
      <div className="flex flex-col  bg-white rounded-2xl my-10 mx-5 bg-opacity-50 md:mt-80">
      <h1 className="font-bold text-xl text-[#ac1010] mt-5 ml-2 text-center">Services Provided</h1>
        <ul className="grid grid-cols-2 list-disc  font-bold text-[#ac1010] my-8 px-4 py-4 justify-between">
          <li className="ml-2">Broadloom Carpet</li>
          <li className="ml-5">Broadloom over Pad</li>
          <li className="ml-2">Carpet Tile</li>
          <li className="ml-5">Luxury Vinyl Tile</li>
          <li className="ml-2">Vinyl Composition Tile</li>
          <li className="ml-5">Static Dissipative Tile</li>
          <li className="ml-2">Forbo Certified Installer</li>
          <li className="ml-5">Hardwood Refinishing</li>
          <li className="ml-2">Sheet Vinyl</li>
          <li className="ml-5">Sheet Welding</li>
          <li className="ml-2">Hardwood Floors</li>
          <li className="ml-5">Free Estimates</li>
        </ul>
      </div>
    </div>
  )
}

export default Welcome