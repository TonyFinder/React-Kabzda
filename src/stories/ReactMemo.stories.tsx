import React, {useState} from 'react';

export default {
    title: "React.memo demo"
}

const CounterMain = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {names: Array<string>}) => {
    console.log ("USERS")

    return <div>{
        props.names.map((m, i) => <div key={i}>{m}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)
const Counter = React.memo(CounterMain)

export const ReactDemo = () => {
    console.log("React Demo")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Anton", "Dmitry", "Alex"])

    const addUserHandler = () => {
        setUsers([...users, 'Anna'])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUserHandler}>add user</button>
        <Counter count={counter}/>
        <Users names={users}/>
    </>
}