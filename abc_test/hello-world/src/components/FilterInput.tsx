import { useState } from "react"

const FilterInput = () => {

    const [filter, setFilter] = useState('');

    const allItems: string[] = [
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'PineApple',
        'Kiwi',
        'Berries'
    ]

    
    const filteredItems = allItems.filter((item) => 
        item.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text"
                value={filter}
                onChange={(e) => {
                    setFilter(e.target.value)
                }}
                placeholder="Enter the name ..."
                style={{marginBottom:'10px'}}

                >
            </input>
                 
            <ul style={{display: 'list-item'}}>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}

                {filteredItems.length === 0 && <span>No Results Found</span>}
            </ul>
                
            <div>
         
            </div>
        
       
            
            
        </div>
    )

}
export default FilterInput
