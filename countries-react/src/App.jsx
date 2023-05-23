import { useState } from 'react'
import Navigation from './components/Navigation'

function App() {

  return (
    <section className='relative w-full min-h-screen flex justify-center items-center flex-col'>
      <Navigation/>
      <div className='relative w-full min-h-[calc(100vh-10rem)] flex justify-center items-center flex-col bg-lightBg px-4 sm:px-20'>

      </div>
    </section>
  )
}

export default App
