type OnOffPropsType = {
    onSet: any
    offSet: any
    indicator: any
    setOn: (s: boolean) => void
}

function OnOff(props: OnOffPropsType) {



    return <div>
        <div style={props.onSet} onClick={() => {props.setOn(true)}}>On</div>
        <div style={props.offSet} onClick={() => {props.setOn(false)}}>Off</div>
        <div style={props.indicator}></div>
    </div>
}

export default OnOff;