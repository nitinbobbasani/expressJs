import { useState } from "react"
import { Button } from "./Button";
import { Input } from "./Input";
import FilterInput from "./FilterInput";

const Header = () => {
    const [name, setName] = useState("Nitin");
    return (
        <div>
        Hello, {name}
        <button onClick={() => {setName('temp')}}>update Name</button>
        <Button position="Top Click"/>
        <Input/>
         
        <FilterInput/>
        
       
        </div> 
    )
   
}
export default Header