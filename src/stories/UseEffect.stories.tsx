import {useEffect, useState} from 'react';

export default {
    title: "COMPONENTS/UseEffectSample"
}

export const UseEffectDemo = () => {
    console.log("Component rendered")
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    useEffect(()=> {
        console.log("UseEffect calls everytime")
        document.title = counter.toString()
    })
    useEffect(()=> {
        console.log("UseEffect calls only when component mounted (componentDidMount)")
        document.title = counter.toString()
    },[])
    useEffect(()=> {
        console.log("UseEffect calls when counter is changed")
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            {counter}<button onClick={() => setCounter(counter + 1)}>+Counter</button>
            {fake}<button onClick={() => setFake(fake + 1)}>+Fake</button>
        </div>
    )
}