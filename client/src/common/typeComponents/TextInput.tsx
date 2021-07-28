import React from 'react'; 


const TextInput: React.FC = () => {
    return (
        <div className="textinput">
        </div>
    ); 
}
export type TextInputProps = {
    required: boolean,
    onChange: Function,
    id: string,
    label: string,
    placeholder: string,
    value: string,
    type?: string,
    maxLength: number,
    inputClass?: string,
    field: string
 };

export default TextInput;