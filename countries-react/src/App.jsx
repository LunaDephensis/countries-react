import { useState } from 'react'
import Navigation from './components/Navigation'
import Filter from './components/Filter'

function App() {

  return (
    <div className='dark relative w-full min-h-screen flex justify-center items-center flex-col'>
      <Navigation/>
      <main className='relative w-full min-h-screen flex justify-start items-center flex-col bg-lightBg dark:bg-darkBg px-4 pt-28 sm:px-20'>
        <Filter/>
      </main>
    </div>
  )
}

export default App
