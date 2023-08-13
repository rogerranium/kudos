import { useState, useEffect } from "react";

interface FormFieldProps {
    htmlFor: string,
    label: string,
    type?: string,
    value: any,
    onChange?: (...args: any) => any,
    error?: string
}

export function FormField({
    htmlFor,
    label,
    type,
    value,
    onChange = () => { },
    error = ""

}: FormFieldProps) {
    const [errorText, setErrorText] = useState(error)

    useEffect(() => {
        setErrorText(error)
    }, [error])

    return <>
        <label htmlFor={htmlFor} className="text-blue-600 font-semibold">
            {label}
        </label>

        <input
            onChange={e => {
                onChange(e)
                setErrorText('')
            }}
            type={type} id={htmlFor} name={htmlFor} value={value} className="w-full p-2 rounded-xl my-2" />

        <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full">
            {errorText || ''}
        </div>
    </>
}