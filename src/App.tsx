import './App.css'
import bannerImage from './assets/download.svg'
import Slider from './component/Slider'
import CheckBox from './component/CheckBox';
import React, { useEffect } from 'react';
import { CheckboxValuesType } from './interface';

function App() {
  const [passwordLength, setPasswordLength] = React.useState<number>(10);
  const [status ,setStatus] = React.useState<string>('good');
  const [generatedPassowrd ,setGeneratedPassowrd] = React.useState<string>('');
  const [checkboxValues, setCheckboxValues] = React.useState<CheckboxValuesType>({
    uppercase: true,
    special: true,
    number: true,
  })
  
  const handleSlide = (value: number) => {
    setPasswordLength(value); 
  };

  const generateCharacterPool = (checkboxValues : CheckboxValuesType) => {
    let pool = 'abcdefghijklmnopqrstuvwxyz'

    if(checkboxValues.uppercase){
      pool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if(checkboxValues.special){
      pool += '!@#$%^&*()_-+=<>?/'
    }

    if(checkboxValues.number){
      pool += '0987654321'
    }

    return pool
  }

  const generateRandomPassword =(length : number, characterPool : string) => {
    let password : string = ""
    const poolLength = characterPool.length

    for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * poolLength)
      password += characterPool.charAt(randomIndex)
    }

    return password
  }

  const handleGeneratepassword = () => {
    const characterPool = generateCharacterPool(checkboxValues)
    const newPassword = generateRandomPassword(passwordLength ,characterPool)
    setGeneratedPassowrd(newPassword)
  }

  useEffect(() => {
    handleGeneratepassword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
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
              <h1 className="text-xl font-semibold">{generatedPassowrd}</h1>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-lg px-2 py-0.5">
                  <p className="text-white uppercase">{status}</p>
                </div>
                <i 
                className="fas fa-rotate-right mt-1 text-gray-500 active:rotate-180 transition duration-300 hover:cursor-pointer"
                onClick={handleGeneratepassword}></i>
              </div>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded-lg mt-4 sm:mt-0">
              Copy
            </button>
          </div>
          <div className='mt-10'>
            <div className='flex gap-5'>
              <h3 className='text-lg'>Password length : <span className='text-lg font-medium'>{passwordLength}</span></h3>
              <Slider onSlide={handleSlide} />
            </div>
          </div>
          <div className='mt-10'>
            <div>
              <CheckBox checkboxValues={checkboxValues} setCheckboxValues={setCheckboxValues} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
