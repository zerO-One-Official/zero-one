import React, { useEffect, useRef, useState } from 'react';
import './Input.css'

function Input(props) {
    const { type, label, icon, name, endIcon } = props;
    const [value, setValue] = useState('');
    const [isHidden, setIsHidden] = useState(true);
    const inputRef = useRef(null);

    useEffect(() => {
        const label = inputRef.current.labels[0];
        if (value === '' || inputRef.current.focus()) {
            label.classList.remove('elevated');
        }
        else
            label.classList.add('elevated');
    }, [value]);

    const toggleHideIcon = () => {
        setIsHidden(!isHidden);
        if (isHidden) {
            inputRef.current.type = "text";
        }
        else {
            inputRef.current.type = "password";
        }
    }


    return (
        <div className='input-box'>
            <div className="icon">
                <i className={icon}></i>
            </div>
            <input ref={inputRef} id={name} type={type} value={value} onChange={() => setValue(inputRef.current.value)} />
            <label htmlFor={name}>{label}</label>
            {
                type === 'password' && <div className="icon password-show-hide" onClick={toggleHideIcon}>
                    <i className={`fa-solid fa-eye ${isHidden ? "" : "hidden"}`}></i>
                    <i className={`fa-solid fa-eye-slash ${isHidden ? "hidden" : ""}`}></i>
                </div>
            }
        </div>
    );
}

export default Input;
