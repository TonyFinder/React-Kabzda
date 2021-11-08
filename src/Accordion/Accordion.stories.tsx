import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/Accordion',
    component: Accordion
} as Meta

const setCollapsed = action('Collapse changes')

const Template: Story<AccordionPropsType> = (arg) => <Accordion {...arg}/>

export const ModePrimary: Story<AccordionPropsType> = (arg) => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion {...arg} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
ModePrimary.args = {
    titleValue: "Students"
}

export const ModeCollapsedAccordion = Template.bind({})
ModeCollapsedAccordion.args = {
    titleValue: 'Students',
    setCollapsed: setCollapsed,
    collapsed: true
}

export const ModeUncollapsedAccordion = Template.bind({})
ModeUncollapsedAccordion.args = {
    titleValue: 'Students',
    setCollapsed: setCollapsed,
    collapsed: false
}
