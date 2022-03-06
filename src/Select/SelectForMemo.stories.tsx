import React, {useMemo, useState} from 'react';
import {Select} from './Select';

export default {
    title: 'Select for memo',
    component: Select
}

type valueForSelectsType = {
    id: number
    country: string
    city: string
    population: number
}

const valueForSelects: valueForSelectsType[] = [
    {id: 1, country: 'Russia', city: 'Arsenyev', population: 50000},
    {id: 1, country: 'Russia', city: 'Moscow', population: 15000000},
    {id: 1, country: 'Russia', city: 'Voronezh', population: 1000000},
    {id: 2, country: 'USA', city: 'Anchorage', population: 600000},
    {id: 2, country: 'USA', city: 'Healy', population: 2500},
    {id: 2, country: 'USA', city: 'Fairbanks', population: 150000},
    {id: 3, country: 'Canada', city: 'Calgary', population: 900000},
    {id: 3, country: 'Canada', city: 'Toronto', population: 9500000}
]

export const SelectForMemo1 = () => {
    const [value, setValue] = useState("Anchorage")
    const [showSelect, setShowSelect] = useState(true)

    const citiesOfUSA = useMemo( () => {
        console.log("citiOfUSA changer")
        return valueForSelects.filter(f => f.id === 2).map(m => ({title: m.city}))
    }, [])

    const changeHandler = (value: string) => {
        setValue(value)
        setShowSelect(!showSelect)
    }

    return <>
        <div>Cities of USA</div>
        <Select selectValue={value} showSelect={showSelect} items={citiesOfUSA} callback={changeHandler} callbackOnclickSelect={() => setShowSelect(!showSelect)}/>
    </>
}

export const SelectForMemo2 = () => {
    const [value, setValue] = useState("Anchorage")
    const [showSelect, setShowSelect] = useState(true)

    const citiesOfUSA = useMemo( () => {
        console.log("citiOfUSA changer")
        return valueForSelects.map(m => ({title: m.city})).filter(f => f.title.toLowerCase().indexOf("a") > -1)
    }, [])

    const changeHandler = (value: string) => {
        setValue(value)
        setShowSelect(!showSelect)
    }

    return <>
        <div>Cities with "a" letters</div>
        <Select selectValue={value} showSelect={showSelect} items={citiesOfUSA} callback={changeHandler} callbackOnclickSelect={() => setShowSelect(!showSelect)}/>
    </>
}

export const SelectForMemo3 = () => {
    const [value, setValue] = useState("Anchorage")
    const [showSelect, setShowSelect] = useState(true)

    const citiesOfUSA = useMemo( () => {
        console.log("citiOfUSA changer")
        return valueForSelects.filter(f => f.population > 500000).map(m => ({title: m.city}))
    }, [])

    const changeHandler = (value: string) => {
        setValue(value)
        setShowSelect(!showSelect)
    }

    return <>
        <div>Cities with population more than 500.000</div>
        <Select selectValue={value} showSelect={showSelect} items={citiesOfUSA} callback={changeHandler} callbackOnclickSelect={() => setShowSelect(!showSelect)}/>
    </>
}