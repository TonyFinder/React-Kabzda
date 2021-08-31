import React, {useState} from 'react';

type UncontrolledRatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let [valueSelected, setStar] = useState(0);

    return (
        <div>
            <Star selected={valueSelected > 0} onClick={ () => setStar(1)}/>
            <Star selected={valueSelected > 1} onClick={ () => setStar(2)}/>
            <Star selected={valueSelected > 2} onClick={ () => setStar(3)}/>
            <Star selected={valueSelected > 3} onClick={ () => setStar(4)}/>
            <Star selected={valueSelected > 4} onClick={ () => setStar(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.onClick}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}