import React from 'react';
import s from './Select.module.css'

type ItemsSelectPropsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    selectValue: string
    showSelect: boolean
    items: ItemsSelectPropsType[]
    callback: (value: any) => void
    callbackOnclickSelect: () => void
}

export const Select = (props: SelectPropsType) => {

    return (
        <div className={s.main}>
            {props.showSelect && <div className={s.selected} onClick={props.callbackOnclickSelect}>
                <div>{props.selectValue}</div>
                <div className={s.arrow}></div>
            </div>}
            {!props.showSelect && <div className={s.options}>
                {props.items.map((i, index) => <div onClick={() => props.callback(i.title)} key={index} className={s.option}>{i.title}</div>)}
            </div>}
        </div>
    )
}