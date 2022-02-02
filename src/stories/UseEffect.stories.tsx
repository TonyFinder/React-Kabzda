import {useEffect, useState} from 'react';

export default {
    title: 'COMPONENTS/UseEffectSample'
}

export const UseEffectDemo = () => {
    console.log('Component rendered')
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    useEffect(() => {
        console.log('UseEffect calls everytime')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('UseEffect calls only when component mounted (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('UseEffect calls when counter is changed')
        document.title = counter.toString()
    }, [counter])

    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+Counter</button>
            {fake}
            <button onClick={() => setFake(fake + 1)}>+Fake</button>
        </div>
    )
}

export const UseEffectSetTimeoutAndSetInterval = () => {
    console.log('Component clock rendered')
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    // useEffect(() => {
    //     console.log('UseEffect calls')
    //     setTimeout(() => {
    //         document.title = counter.toString()
    //     }, 2000)
    // }, [counter])

    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter(state => state + 1)
    //     }, 1000)
    // }, [])

    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+Counter</button>
            {fake}
            <button onClick={() => setFake(fake + 1)}>+Fake</button>
        </div>
    )
}

export const UseEffectCounter = () => {
    console.log('Component clock rendered')
    const [hours, setHours] = useState<string>('23')
    const [minutes, setMinutes] = useState<string>('58')
    const [seconds, setSeconds] = useState<string>('00')

    // This example is generating always
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log("tick")
    //         setSeconds(state => {
    //             if (Number(state) < 59) {
    //                 if (Number(state) > 8) {
    //                     return (Number(state) + 1).toString()
    //                 } else return `0${(Number(state) + 1).toString()}`
    //             } else {
    //                 setMinutes(state => {
    //                     if (Number(state) < 59) {
    //                         if (Number(state) > 8) {
    //                             return (Number(state) + 1).toString()
    //                         } else return `0${(Number(state) + 1).toString()}`
    //                     } else {
    //                         setHours(state => {
    //                             if (Number(state) < 23) {
    //                                 if (Number(state) > 8) {
    //                                     return (Number(state) + 1).toString()
    //                                 } else return `0${(Number(state) + 1).toString()}`
    //                             } else {
    //                                 return '00'
    //                             }
    //                         })
    //                         return '00'
    //                     }
    //                 })
    //                 return '00'
    //             }
    //         })
    //     }, 1000)
    // }, [])

    return (
        <div>
            {`${hours}:${minutes}:${seconds}`}
        </div>
    )
}