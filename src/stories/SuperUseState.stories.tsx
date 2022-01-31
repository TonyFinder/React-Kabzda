import {useState} from 'react';

export default {
    title: 'Components/SuperUseState'
}

const generaterInit = () => {
    console.log("generaterInit")
    return 123
}

export const SuperUseStateMain = () => {
    console.log("SuperUseStateMain")
    const [counter, setCounter] = useState<number>(generaterInit)

    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </div>
    )
}