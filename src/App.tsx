import React from 'react';
import './App.css';
import {Accordion} from './Accordion/Accordion';
import {Rating} from './Rating/Rating';

function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Меню"}/>
            <Accordion title={"Студенты"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

