import './App.css'
import bannerImage from './assets/download.svg'

function App() {
  return (
    <div className='mt-10'>
      <div className='text-center'>
        <h1 className='font-extrabold text-3xl sm:text-6xl text-black font-sans'>Random password generator</h1>
        <h3 className='sm:text-lg mt-10 text-black sm:font-semibold'>Create strong and secure passwords to protect your accounts your accounts online.</h3>
      </div>
      <div className="flex flex-col sm:flex-row mt-8 justify-center gap-5 items-center">
        <div>
          <img src={bannerImage} alt="Banner" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-1 gap-2 justify-between border border-slate-400 rounded-2xl bg-white p-4">
            <h1 className="text-xl font-semibold">Generated Password</h1>
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 rounded-lg px-2 py-0.5">
                <p className="text-white uppercase">Very Strong</p>
              </div>
              <i className="fas fa-rotate-right mt-1 text-gray-500"></i>
            </div>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-lg mt-4 sm:mt-0">
            Copy
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
