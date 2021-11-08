import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (c: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={ () => props.setCollapsed(!props.collapsed)}/>
                {!props.collapsed && <AccordionBody />}
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}