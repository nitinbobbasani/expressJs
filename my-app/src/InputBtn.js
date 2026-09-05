import {React, useEffect, useState} from 'react';

function InputBtn() {
    const arrayLimit = 3;
     
    const [number, setNumber] = useState(''); //text field input
    const [inputValues, setInputValues] = useState([]); //input value array
    const [count, setCount] = useState(0); //no. of submits
    const [largeNumber, setLargeNumber] = useState(''); //large number
    const [postData, setPostData] = useState([]);

    const handleSubmit=() => {
        setInputValues((prevVal)=> [...prevVal, ...number.split('')]);
        setNumber('');
        setCount((prevCount) => prevCount+1);
        
    }
    useEffect(() => {
        if(arrayLimit === count){
           const sortedValue= inputValues.sort((a, b) => b - a);
           setLargeNumber(sortedValue);

           const fetchData = async() => {
           
            const promises = inputValues.map(async(postId) => {
                const url = "https://jsonplaceholder.typicode.com/posts/"+postId;
                const response = await fetch(url);
                return await response.json();
            })
            const data = await Promise.all(promises);
            console.log("data: ", data)
            setPostData(data);
           }
           fetchData();
        }
    }, [inputValues, count])

    return (
        <div>   
            <label>Enter Number</label>
            <input type="number" value={number} disabled={arrayLimit === count} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={handleSubmit} disabled={arrayLimit === count || number === ''}>Submit</button>
            <h2>Largest Number is</h2>
            <p>{largeNumber}</p>

            <h2>Post API Data Response</h2>

            {postData.map((item) => {
                return (
                    <div key={item.id}>
                        {Object.entries(item).map(([key,value]) => (
                            <p key={key}>{key}: {value}</p>
                        ))}

                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default InputBtn;