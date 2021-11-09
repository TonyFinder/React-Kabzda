import React from 'react';

export type ItemsPropsType = {
    name: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (c: boolean) => void
    items: ItemsPropsType[]
    callback: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={ () => props.setCollapsed(!props.collapsed)}/>
                {!props.collapsed && <AccordionBody items={props.items} callback={props.callback}/>}
            </div>
    );
}

export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: ItemsPropsType[]
    callback: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map( (i, index) => <li onClick={() => props.callback(i.value)} key={index}>{i.name}</li>)}
        </ul>
    );
}