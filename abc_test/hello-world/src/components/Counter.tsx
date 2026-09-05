// import React from 'react'

import { useEffect, useRef, useState } from "react";

const Counter = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let count1 = 0;
    const [count, setCount] = useState(0)
    const [update, setUpdate] = useState([0,1,2,3])
    useEffect(() => {
        setInterval(() => {
        count1++
        }, 1000)
    return () => {
        console.log("<test></test>")
    }
    }, [count1])


    const [user, setUser] = useState({
        age: 1,
        name: 'harry'
    })
    const incrementFn = () => {
        setCount(count+1);
        console.log("count:: ", count)
    }
      const decrementFn = () => {
        setCount(count-1);
        console.log("count:: ", count)
    }
    const updateFn = () => {
        // update.push(4)
        setUpdate([...update, 9])
        console.log(update)
    }
    const updateUser = () => {
        // user.age = 33
        console.log(user)
        setUser({...user, 'age': 33, 'name': 'Nitin'})
    }
    const addFocus = () => {
        console.log(inputRef)
        // inputRef.current.focus()
    }

    const inputRef = useRef(null)
    // const [users, setUsers] = useState([]);

    // const fetchData = async() => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data = await response.json()
    //     setUsers(data);
        
    // };
    // if(users)
    // fetchData()
    

  return (
    <div> 
        <p className="countNo">Count: {count}</p>
        <button className="countBtn" onClick={incrementFn}>Increment</button>
        <hr></hr>
        <button className="countBtn" onClick={decrementFn}>Decrement</button>
        <button onClick={updateFn}>Update Array</button>
        <button onClick={updateUser}>Update User</button>

        <ul>
            
               {update.map((num, i) => (
                    <li>
                        <span key={i}>{num}</span>
                    </li>
               ))}
            
        </ul>
        <p>user age: {user.age}</p>
        <p>user name: {user.name}</p>

        <h3>List of Users</h3>
                <input type="text" ref={inputRef}></input> 
        <button onClick={addFocus}>Focus</button>
        <div>
           {/* {users?.map((value, index) => (
                // <p key={index}> {value?.username} : {value?.email}</p>
           ))} */}
        </div>



    </div>
  )
}

export default Counter