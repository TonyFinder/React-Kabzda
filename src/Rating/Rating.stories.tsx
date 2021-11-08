import React, {useState} from 'react';
import {Rating, RatingPropsType, RatingValueType} from './Rating';
import {Meta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: "Components/Rating",
    component: Rating
} as Meta

const setValueHandler = action('Value have to be changed')

const Template: Story<RatingPropsType> = (arg) => <Rating {...arg}/>

export const ModePrimary = () => {
    const [value, setValue] = useState<RatingValueType>(0)

    return <Rating value={value} setValueStar={setValue}/>
}

export const ModeEmpty = Template.bind({})
ModeEmpty.args = {
    value: 0,
    setValueStar: setValueHandler
}
export const Mode1 = Template.bind({})
Mode1.args = {
    value: 1,
    setValueStar: setValueHandler
}
export const Mode2 = Template.bind({})
Mode2.args = {
    value: 2,
    setValueStar: setValueHandler
}
export const Mode3 = Template.bind({})
Mode3.args = {
    value: 3,
    setValueStar: setValueHandler
}
export const Mode4 = Template.bind({})
Mode4.args = {
    value: 4,
    setValueStar: setValueHandler
}
export const Mode5 = Template.bind({})
Mode5.args = {
    value: 5,
    setValueStar: setValueHandler
}

