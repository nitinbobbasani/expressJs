type btnProps = {
    position: string
}


export const Button = ({position}: btnProps) => {
    const clickHandler = () => {
        alert(position); 
    }
    return <button onClick={clickHandler}>Click Me</button>
}