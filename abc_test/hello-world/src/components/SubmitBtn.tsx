import { useState } from "react";
import Counter from "./Counter";


const SubmitBtn = () => {
    const [name, SetName] = useState('');

    const onSubmitBtn = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        console.log(`submitted  ${name}`)
        SetName('')

    }
  return (
    <div>
    <form onSubmit={onSubmitBtn}>
            <input type="text" placeholder="Enter the name" value={name} onChange={(e) => SetName(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
            <Counter/>
    </div>
   
  )
}

export default SubmitBtn