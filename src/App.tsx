import './App.css'

function App() {
  return (
    <>
      <div className="flex">
        <div className="answerField">placeholder</div>
      </div>
      <div className="flex">
        <button className="button-light-gray">C</button>
        <button className="button-light-gray">+/-</button>
        <button className="button-light-gray">%</button>
        <button className="button-orange">÷</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray">7</button>
        <button className="button-dark-gray">8</button>
        <button className="button-dark-gray">9</button>
        <button className="button-orange">×</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray">4</button>
        <button className="button-dark-gray">5</button>
        <button className="button-dark-gray">6</button>
        <button className="button-orange">-</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray">1</button>
        <button className="button-dark-gray">2</button>
        <button className="button-dark-gray">3</button>
        <button className="button-orange">+</button>
      </div>
      <div className="flex">
        <button className="bg-[#333333] button-big hover:bg-[#737373]">0</button>
        <button className="button-dark-gray">.</button>
        <button className="button-orange">=</button>
      </div>  
      
    </>

  )
}

export default App
