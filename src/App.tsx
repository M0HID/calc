import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="flex">
        <div className="answerField">placeholder</div>
      </div>
      <div className="flex">
        <button className="button-1-4">C</button>
        <button className="button-1-4">+/-</button>
        <button className="button-1-4">%</button>
        <button className="bg-orange-600 button-1-4">÷</button>
      </div>
      <div className="flex">
        <button className="button-1-4">7</button>
        <button className="button-1-4">8</button>
        <button className="button-1-4">9</button>
        <button className="bg-orange-600 button-1-4">×</button>
      </div>
      <div className="flex">
        <button className="button-1-4">4</button>
        <button className="button-1-4">5</button>
        <button className="button-1-4">6</button>
        <button className="bg-orange-600 button-1-4">-</button>
      </div>
      <div className="flex">
        <button className="button-1-4">1</button>
        <button className="button-1-4">2</button>
        <button className="button-1-4">3</button>
        <button className="bg-orange-600 button-1-4">+</button>
      </div>
      <div className="flex">
        <button className="button-1-2">0</button>
        <button className="button-1-4">.</button>
        <button className="bg-orange-600 button-1-4">=</button>
      </div>
      
    </>

  )
}

export default App
