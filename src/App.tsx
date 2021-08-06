import React from 'react';
import './App.css';
import {Accordion} from './Accordion/Accordion';
import {Rating} from './Rating/Rating';

function App() {
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Students"} collapsed={true}/>
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
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

