import React, {useContext} from 'react'
import Component2 from './Component2'
import { counterContext } from '../context/context'

const Component1 = () => {

  const value = useContext(counterContext)
  
  return (
    <div className='comp1'>
      <h2>This is Component 1 </h2>
      <p>{value.count}</p>
      
      
    </div>
  )
}

export default Component1