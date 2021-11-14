import React from 'react';
import {reducer, StateType, TOGGLE_CONSTANT} from './Reducer';

test('Reducer test for accordion. False change to true', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(true)
})

test('Reducer test for accordion. True change to false', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false)
})

test('Reducer test for accordion. Error', () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => {reducer(state, {type: "NOTHING"})}).toThrowError()
})