import React from 'react';

export type OnOffPropsType = {
    onSet: any
    offSet: any
    indicator: any
    setOn: (s: boolean) => void
}

export const OnOff = React.memo(OnOffMain)

function OnOffMain(props: OnOffPropsType) {

    return <div>
        <div style={props.onSet} onClick={() => {props.setOn(true)}}>On</div>
        <div style={props.offSet} onClick={() => {props.setOn(false)}}>Off</div>
        <div style={props.indicator}></div>
    </div>
}