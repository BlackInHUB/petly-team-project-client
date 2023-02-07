import { useState } from "react";

export const AddsPetItem = ({label, name, type, placeholder, pattern, title}) => {
    const [value, setValue] = useState('' || {});

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.currentTarget
        console.log('name', name)
        console.log('value', value)

        setValue(prevState => ({
            ...prevState, [name]:value
        }))

        //  if (name === "name") {
        //     setValue(prevState => ({
        //         ...prevState, name:value
        //     }))
        //     console.log('setValue1', value)
            
        // }

        // if (name === "breed") {
        //     setValue(prevState => ({
        //         ...prevState, breed:value
        //     }))
        //     console.log('setValue2', value)
            
        // }
    }

    console.log('state', value)

    return(
        <>
        <label htmlFor={name}>{label}</label>
                      <input 
                        name={name}
                        type={type}
                        value={value} onChange={handleChange}
                        id={name}  
                        placeholder={placeholder}
                        pattern={pattern}
                        title={title}
                       />
        </>
    )
}