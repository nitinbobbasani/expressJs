import { useState } from "react"
import SubmitBtn from "./SubmitBtn"

 const SearchFilter = () => {

    const [filter, setFilter] = useState('')

    const items: string[] = [
        'Cricket',
        'Football',
        'Soccer',
        'Hockey',
        'BaseBall',
        'Tennis'
    ]

    const filteredData = items.filter((item  => (
        item.toLowerCase().includes(filter.toLowerCase()))
    ))
        
    return (
        <div>
            <SubmitBtn/>
            <input 
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}     
                placeholder="Enter Input"
            />

            <ul>
               {filteredData.map((item, index) => (
                <li key={index}> {item}</li>
               ))}
               {filteredData.length === 0 && <p>No Results Found</p>}
            </ul>
        </div>
    )

}

export default SearchFilter