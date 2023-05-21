import React, { useState } from "react";


export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className = "auth-form-container">
        <form className = "register-form" onSubmit ={handleSubmit}>
            <label>Full Name</label>
            <input value = {name} onChange = {(e) => setName(e.target.value)} name = "name" id = "name" placeholder = "full name" />
            <label for = "email">Email: </label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "your.email@gmail.com" id = "email" name = "email" />
            <label for = "password"> Password: </label>
            <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "********" id = "password" name = "password" />
            <button type = "submit"> Login</button>
        </form>
        <button onClick = {() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}