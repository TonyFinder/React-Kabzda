import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff, OnOffPropsType} from './OnOff';
import {Meta, Story} from '@storybook/react';

export default {
    title: "Components/OnOff",
    component: OnOff
} as Meta

const setOnClick = action('Settings will be changed')

const onSetGreen = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    margin: "5px",
    backgroundColor: "green"
}
const offSetWhite = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    margin: "5px",
    backgroundColor: "white"
}
const offSetRed = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    margin: "5px",
    backgroundColor: "red"
}
const indicatorGreen = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: "green"
}
const indicatorRed = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: "red"
}


const Template: Story<OnOffPropsType> = (arg) => <OnOff {...arg}/>

export const ModePrimary = () => {
    const [on, setOn] = useState<boolean>(true)

    const onSet = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        margin: "5px",
        backgroundColor: on ? "green" : "white"
    }
    const offSet = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        margin: "5px",
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

    return <OnOff onSet={onSet} offSet={offSet} indicator={indicator} setOn={setOn}/>
}

export const ModeOn = Template.bind({})
ModeOn.args = {
    onSet: onSetGreen,
    offSet: offSetWhite,
    indicator: indicatorGreen,
    setOn: setOnClick
}
export const ModeOff = Template.bind({})
ModeOff.args = {
    onSet: offSetWhite,
    offSet: offSetRed,
    indicator: indicatorRed,
    setOn: setOnClick
}