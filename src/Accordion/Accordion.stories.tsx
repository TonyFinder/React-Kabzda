import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/Accordion',
    component: Accordion
} as Meta

const setCollapsed = action('Collapse changes')
const callbackItem = action(`Some item was clicked`)


const Template: Story<AccordionPropsType> = (arg) => <Accordion {...arg}/>

export const ModePrimary: Story<AccordionPropsType> = (arg) => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion {...arg} collapsed={collapsed} setCollapsed={setCollapsed} callback={(value) => alert(`Item with value ${value} was clicked`)}/>
}
ModePrimary.args = {
    titleValue: "Students",
    items: [{name: "Anton", value: 1}, {name: "Anna", value: 2}, {name: "Igor", value: 3}, {name: "Vladimir", value: 4}, {name: "Alex", value: 5}],
}

export const ModeCollapsedAccordion = Template.bind({})
ModeCollapsedAccordion.args = {
    titleValue: 'Students',
    setCollapsed: setCollapsed,
    collapsed: true,
    items: []
}

export const ModeUncollapsedAccordion = Template.bind({})
ModeUncollapsedAccordion.args = {
    titleValue: 'Students',
    setCollapsed: setCollapsed,
    collapsed: false,
    items: [{name: "Anton", value: 1}, {name: "Anna", value: 2}, {name: "Igor", value: 3}, {name: "Vladimir", value: 4}, {name: "Alex", value: 5}],
    callback: callbackItem
}
