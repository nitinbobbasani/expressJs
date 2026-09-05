// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Component1 from './components/Component1'
// import Header from './components/Header';
// import ImageSlider from './components/ImageSlider'
// import SearchFilter from './components/SearchFilter'
import {counterContext} from './context/context'



function App() {
  const [count, setCount] = useState(0)
  const setCounter= () => {
    setCount(count+1);
  }
  return (
    <>
    <counterContext.Provider value={{count, setCount}}>

    
       {/* <Header></Header> */}
    
      {/* <ImageSlider></ImageSlider> */}
   
      {/* <SearchFilter/> */}
      <div className='comp1'>
        <button onClick={setCounter}>Increment Count</button>
        <Component1/>
      </div>
      </counterContext.Provider>
    </>
 
   
  )
}

export default App
