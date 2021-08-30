import React, {useState} from 'react';

type UncontrolledAccordionProps = {
    titleValue: string
    //collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionProps) {

    let [collapsed, setCollapsed] = useState(false);

    const changeCollapse = (isCollapse: boolean) => {
        setCollapsed(isCollapse)
    }

    return (
            <div>
                <AccordionTitle title={props.titleValue} changeCollapse={changeCollapse} collapsedValue={collapsed}/>
                {!collapsed && <AccordionBody />}
            </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    collapsedValue: boolean
    changeCollapse: (isCollapse: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ () => props.changeCollapse(!props.collapsedValue)}>{props.title}</h3>
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