import React, {useState} from 'react';

type UncontrolledRatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let [valueSelected, setStar] = useState(3);

    return (
        <div>
            <Star selected={valueSelected > 0}/>
            <button onClick={() => {
                setStar(1)
            }}>1
            </button>
            <Star selected={valueSelected > 1}/>
            <button onClick={() => {
                setStar(2)
            }}>2
            </button>
            <Star selected={valueSelected > 2}/>
            <button onClick={() => {
                setStar(3)
            }}>3
            </button>
            <Star selected={valueSelected > 3}/>
            <button onClick={() => {
                setStar(4)
            }}>4
            </button>
            <Star selected={valueSelected > 4}/>
            <button onClick={() => {
                setStar(5)
            }}>5
            </button>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    if (props.selected === true) {
        return (
            <span><b>star </b></span>
        );
    } else {
        return (
            <span>star </span>
        );
    }

}