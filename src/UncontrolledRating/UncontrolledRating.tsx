import React, {useState} from 'react';

type UncontrolledRatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let [valueSelected, setStar] = useState(3);

    const boldStar = (_id: number) => {
        setStar(_id)
    }

    return (
        <div>
            <Star selected={valueSelected > 0} id={1} boldStar={boldStar}/>
            <Star selected={valueSelected > 1} id={2} boldStar={boldStar}/>
            <Star selected={valueSelected > 2} id={3} boldStar={boldStar}/>
            <Star selected={valueSelected > 3} id={4} boldStar={boldStar}/>
            <Star selected={valueSelected > 4} id={5} boldStar={boldStar}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    id: number
    boldStar: (_id: number) => void
}

function Star(props: StarPropsType) {
    return props.selected ? <span key={props.id} onClick={ () => props.boldStar(props.id)}><b>star </b></span> : <span key={props.id} onClick={ () => props.boldStar(props.id)}>star </span>
}