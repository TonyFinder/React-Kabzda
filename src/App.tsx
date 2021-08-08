import React from 'react';
import './App.css';
import {Accordion} from './Accordion/Accordion';
import {Rating} from './Rating/Rating';
import OnOff from './OnOff/OnOff';
import {UncontrolledAccordion} from './UncontrolledAccordion/UncoltrolledAccordion';
import {UncontrolledRating} from './UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div>
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Students"} />
            <UncontrolledRating />
            {/*<UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />*/}
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

