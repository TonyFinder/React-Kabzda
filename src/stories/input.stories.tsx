import React, {ChangeEvent, MouseEventHandler, useRef, useState} from 'react';

export default {
    title: 'Components/Input'
}

export const InputUncontrolled = () => <input/>

export const InputTrackValue = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (
        <>
            <input onChange={onChangeHandler}/>
            <span> - </span> {value}
        </>
    )
}

export const InputControlledWithFixedValue = () => <input value={'it-incubator'}/>

export const InputGetValueByButtonPress = () => {
    const [value, setValue] = useState("")
    const refValue = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        const el = refValue.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={refValue}/><button onClick={onClickHandler}>save</button><span> - </span>{value}
        </>
    )
}

export const InputControlled = () => {
    const [parentValue, setParentValue] = useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const CheckboxControlled = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const SelectControlled = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined)
    const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return (
        <select value={parentValue} onChange={onSelectHandler}>
            <option>none</option>
            <option value={"1"}>Canada</option>
            <option value={"2"}>USA</option>
            <option value={"3"}>Russia</option>
        </select>
    )
}