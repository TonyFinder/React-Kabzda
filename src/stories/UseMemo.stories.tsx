import React, {useMemo, useState} from 'react';

export default {
    title: "useMemo Demo"
}

export const UseMemoDemoDifficultCounting = () => {
    const [a, setA] = useState<number>(4)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=> {
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i
            let fake = 1
            while (fake < 10000000) {fake = fake + Math.random()}
        }
        return resultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => {setA(+e.currentTarget.value)}}/>
            <input value={b} onChange={(e) => {setB(+e.currentTarget.value)}}/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


const UsersSecret = (props: {names: Array<string>}) => {
    console.log ("USERS")

    return <div>{
        props.names.map((m, i) => <div key={i}>{m}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const ReactDemo = () => {
    console.log("React Demo")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Anton", "Dmitry", "Alex"])

    let filteredUsers = useMemo( () => {
        return users.filter(f => f.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUserHandler = () => setUsers([...users, 'Anna'])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUserHandler}>add user</button>
        {counter}
        <Users names={filteredUsers}/>
    </>
}