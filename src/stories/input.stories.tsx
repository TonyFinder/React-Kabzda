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