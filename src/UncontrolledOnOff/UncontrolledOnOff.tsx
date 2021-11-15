import React, {useState} from 'react';

type OnOffPropsType = {
    //on: boolean
}

const OnOff = React.memo(OnOffMain)

function OnOffMain(props: OnOffPropsType) {

    let[on, setOn] = useState(false);

    const onSet = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offSet = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicator = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
    }

    const offClicked = () => {
        setOn(false)
    }

    return <div>
        <div style={onSet} onClick={onClicked}>On</div>
        <div style={offSet} onClick={offClicked}>Off</div>
        <div style={indicator}></div>
    </div>
}

export default OnOff;