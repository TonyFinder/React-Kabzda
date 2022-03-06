import React, {useEffect, useState} from 'react';
import {AnalogClock} from './AnalogClock/AnalogClock';
import {DigitalClock} from './DigitalClock/DigitalClock';

export type ClockPropsType = {
    date: Date
}

export const Clock = () => {
    const [date, setDate] = useState(new Date())
    const [format, setFormat] = useState<boolean>(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
                console.log('tick')
                setDate(new Date())
            }, 1000
        );
        return () => clearInterval(intervalId)

    }, [])

    let view

    switch (format) {
        case true:
            view = <AnalogClock date={date}/>
            break
        case false:
        default:
            view = <DigitalClock date={date}/>
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '350px'}}>
            <div style={{marginBottom: '20px'}}>
                <input type={'button'} value={'Change time format'} onClick={() => setFormat(!format)}/>
            </div>
            <div>
                {view}
            </div>
        </div>
    )
}

