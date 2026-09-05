import { useState } from "react"

export const Input  = () => {
    const [userName, setUserName] = useState('')
    return (
        <div>
            <input 
                type="text" 
                value={userName}

                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <span>Hello, {userName || 'Guest'}</span>
        
        </div>
    )
}