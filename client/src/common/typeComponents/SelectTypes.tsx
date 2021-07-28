import React from 'react'; 


const SelectTypes: React.FC = () => {
    return (
        <div className="selecttypes">

        </div>
    );
}

export type SelectProps = {
    required?: boolean,
    onChange: Function,
    id: string,
    label: string,
    value: string,
    inputClass?: string,
    options: string[],
    field: string
 };

export default SelectTypes;