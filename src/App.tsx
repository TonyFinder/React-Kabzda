import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './Rating/Rating';
import {UncontrolledAccordion} from './UncontrolledAccordion/UncoltrolledAccordion';
import {UncontrolledRating} from './UncontrolledRating/UncontrolledRating';
import {Accordion} from './Accordion/Accordion';
import UncontrolledOnOff from './UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './OnOff/OnOff';

function App() {

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
            <Accordion titleValue="Students" collapsed={collapsed} setCollapsed={setCollapsed}/>
            <UncontrolledAccordion titleValue={"Menu"} />
            <Rating value={valueStar} setValueStar={setValueStar}/>
            <UncontrolledRating />
        </div>
    );
}

export default App;

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

