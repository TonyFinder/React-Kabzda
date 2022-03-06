import React from 'react';
import {ClockPropsType} from '../Clock';

export const DigitalClock: React.FC<ClockPropsType> = ({date}) => {
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