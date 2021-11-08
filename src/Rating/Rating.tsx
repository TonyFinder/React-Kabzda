import React from 'react';
import {lookupService} from 'dns';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    setValueStar: (s: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={ () => props.setValueStar(1)}/>
            <Star selected={props.value > 1} onClick={ () => props.setValueStar(2)}/>
            <Star selected={props.value > 2} onClick={ () => props.setValueStar(3)}/>
            <Star selected={props.value > 3} onClick={ () => props.setValueStar(4)}/>
            <Star selected={props.value > 4} onClick={ () => props.setValueStar(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.onClick}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}