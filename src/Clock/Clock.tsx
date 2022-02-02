import React, {useEffect, useState} from 'react';
import {setInterval} from 'timers';

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    // Need to ask for help. clearInterval is not working
    // useEffect( ()=> {
    //     const intervalId = setInterval( () => {
    //         console.log("tick")
    //         setDate(new Date())}, 1000
    //     );
    //     return () => {
    //         clearInterval(intervalId)
    //     }
    // }, [] )

    const generateClock = (num: number) => num < 10 ? '0' + num : num

    return (
        <div>
            <span>{generateClock(date.getHours())}</span>
            :
            <span>{generateClock(date.getMinutes())}</span>
            :
            <span>{generateClock(date.getSeconds())}</span>
        </div>
    )
}