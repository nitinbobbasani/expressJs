interface Props {
    name: string;
    age: number;
    married: boolean;
}

export const Person = (props: Props) => {
    return <div>
        <p>My Name is {props.name}</p>
        <p>My age is {props.age}</p>
        <p>I am {props.married ? 'Married': 'Single'}</p>
        <p>{props.married? 'true': 'false'}</p>
    </div>
}