import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './Rating/Rating';
import {UncontrolledAccordion} from './UncontrolledAccordion/UncoltrolledAccordion';
import {UncontrolledRating} from './UncontrolledRating/UncontrolledRating';
import {Accordion} from './Accordion/Accordion';
import UncontrolledOnOff from './UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './OnOff/OnOff';
import {Clock} from './Clock/Clock';

const App = React.memo(AppMain)

function AppMain() {

    let [valueStar, setValueStar] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState<boolean>(false)

    let[on, setOn] = useState<boolean>(false);

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

    return (
        <div className={"main"}>
            <OnOff onSet={onSet} offSet={offSet} indicator={indicator} setOn={setOn}/>
            <UncontrolledOnOff />
            <Accordion titleValue="Students" collapsed={collapsed} setCollapsed={setCollapsed} items={[{name: "Anton", value: 1}, {name: "Anna", value: 2}, {name: "Igor", value: 3}, {name: "Vladimir", value: 4}, {name: "Alex", value: 5}]} callback={(value)=> alert(`Value ${value} was clicked`)}/>
            <UncontrolledAccordion titleValue={"Menu"} />
            <Rating value={valueStar} setValueStar={setValueStar}/>
            <UncontrolledRating />
            {on && <Clock/>}
        </div>
    );
}

export default App;
