import React, {useState} from 'react';
import {Select} from './Select';

export default {
    title: "Components/Select Beautiful",
    component: Select
}

export const ModeFunction = () => {
    const [selectValue, setSelectValue] = useState<string>("Russia")
    const [showSelect, setShowSelect] = useState<boolean>(true)
    const callbackChangeValue = (value: any) =>  {
        setSelectValue(value)
        setShowSelect(!showSelect)
    }
    const callbackShowSelectChanger = () => setShowSelect(!showSelect)

    return (
        <Select selectValue={selectValue} items={[{title: "Canada", value: 1}, {title: "USA", value: 2}, {title: "Poland", value: 3}, {title: "Russia", value: 4}]} callback={callbackChangeValue} showSelect={showSelect} callbackOnclickSelect={callbackShowSelectChanger}/>
    )
}