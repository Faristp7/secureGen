import React from 'react'
import '../App.css'
import {  CheckBoxProps } from '../interface'

const CheckBox: React.FC<CheckBoxProps> = ({ checkboxValues, setCheckboxValues }) => {
    console.log(checkboxValues)
    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <input
                    type="checkbox"
                    name="uppercase"
                    id="uppercase"
                    checked={checkboxValues.uppercase}
                    onChange={() => setCheckboxValues(prevState => ({
                        ...prevState,
                        uppercase:!prevState.uppercase,
                    }))} />
                <label className='cursor-pointer text-lg' htmlFor="uppercase">uppercase</label>
            </div>
            <div className='flex gap-2'>
                <input
                    type="checkbox"
                    name="special"
                    id="special"
                    checked={checkboxValues.special}
                    onChange={() => setCheckboxValues(prevState => ({
                        ...prevState,
                        special:!prevState.special
                    }))} />
                <label className='cursor-pointer text-lg' htmlFor="special">special</label>
            </div>
            <div className='flex gap-2'>
                <input
                    type="checkbox"
                    name="number"
                    id="number"
                    checked={checkboxValues.number}
                    onChange={() => setCheckboxValues(prevState => ({
                        ...prevState,
                        number:!prevState.number
                    }))} />
                <label className='cursor-pointer text-lg' htmlFor="number">number</label>
            </div>
        </div>
    )
}

export default CheckBox
