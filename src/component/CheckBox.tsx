import React from 'react'
import '../App.css'
import { CheckboxValuesType, CheckBoxProps } from '../interface'

const CheckBox: React.FC<CheckBoxProps> = ({ checkboxValues, setCheckboxValues }) => {

    const [values, setValues] = React.useState<CheckboxValuesType>(checkboxValues)
    const handleCheckboxChange = (name: keyof CheckboxValuesType) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: !prevValues[name],
        }));
    };

    React.useEffect(() => {
        setCheckboxValues(values);
    }, [values, setCheckboxValues]);


    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <input
                    type="checkbox"
                    name="uppercase"
                    id="uppercase"
                    checked={values.uppercase}
                    onChange={() => handleCheckboxChange('uppercase')} />
                <label className='cursor-pointer text-lg' htmlFor="uppercase">uppercase</label>
            </div>
            <div className='flex gap-2'>
                <input
                    type="checkbox"
                    name="special"
                    id="special"
                    checked={values.special}
                    onChange={() => handleCheckboxChange("special")} />
                <label className='cursor-pointer text-lg' htmlFor="special">special</label>
            </div>
            <div className='flex gap-2'>
                <input
                    type="checkbox"
                    name="number"
                    id="number"
                    checked={values.number}
                    onChange={() => handleCheckboxChange("number")} />
                <label className='cursor-pointer text-lg' htmlFor="number">number</label>
            </div>
        </div>
    )
}

export default CheckBox
