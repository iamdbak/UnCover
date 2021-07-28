import React from 'react'; 


const CheckboxTypes: React.FC = () => {
    return (
        <div className="checkboxtypes">

        </div>
    ); 
}

export type CheckboxProps = {
    required?: boolean,
    onChange: Function,
    id: string,
    label: string,
    value: boolean,
    inputClass?: string,
    field: string
 };
 
 export type OnChangeCheckboxModel = {
    value: boolean,
    error: string,
    touched: boolean
 };

export default CheckboxTypes;