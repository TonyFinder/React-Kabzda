import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './Reducer';

export type UncontrolledAccordionProps = {
    titleValue: string
    //collapsed: boolean
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMain)

function UncontrolledAccordionMain(props: UncontrolledAccordionProps) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={ () => dispatch({type: TOGGLE_CONSTANT}) }/>
                {!state.collapsed && <AccordionBody />}
            </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo(AccordionTitleMain)

function AccordionTitleMain(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

const AccordionBody = React.memo(AccordionBodyMain)

function AccordionBodyMain() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}