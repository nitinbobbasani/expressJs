

const Child = (props: any) => {
    return (
        <div>
            <span>My Name is {props.name} and my age is {props.count}</span>
            <div>{props.count}</div>
        </div>
    )
}

export default Child
