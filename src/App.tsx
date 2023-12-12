import './App.css'
import bannerImage from './assets/download.svg'
import Slider from './component/Slider'
import React from 'react';

function App() {  
  const [passwordLength, setPasswordLength] = React.useState<number>(10);

  const handleSlide = (value: number) => {
    setPasswordLength(value);
  };

  return (
    <div className='mt-10'>
      <div className='text-center'>
        <h1 className='font-extrabold text-3xl sm:text-6xl text-black font-sans'>Random password generator</h1>
        <h3 className='sm:text-lg mt-10 text-black sm:font-semibold'>Create strong and secure passwords to protect your accounts your accounts online.</h3>
      </div>
      <div className="flex flex-col sm:flex-row mt-8 justify-center gap-10 items-center">
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
        <div>
          <div className="flex flex-col gap-4 sm:flex-row items-center">
            <div className="flex flex-1 gap-10 justify-between border border-slate-400 rounded-2xl bg-white p-4">
              <h1 className="text-xl font-semibold">Generated Password</h1>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-lg px-2 py-0.5">
                  <p className="text-white uppercase">Very Strong</p>
                </div>
                <i className="fas fa-rotate-right mt-1 text-gray-500 active:rotate-180 transition duration-300 hover:cursor-pointer"></i>
              </div>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded-lg mt-4 sm:mt-0">
              Copy
            </button>
          </div>
          <div className='mt-10'>
            <div className='flex justify-between'>
              <h3 className='text-lg'>Password length : <span className='text-lg font-medium'>{passwordLength}</span></h3>
              <Slider onSlide={handleSlide}/>
            </div>
          </div>
          <div className='mt-5'>
            <div>
              <h3 className='text-lg'>Characters used : </h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
