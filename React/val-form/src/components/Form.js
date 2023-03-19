import React, { useState } from  'react';

const Form = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstNameError] = useState("");

    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmpassword, setConfirmPassword] = useState(""); 
    const [confirmpasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Title is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }

    const handlePassword= (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Title is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("Title must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

    const handleConfirmPassword= (e) => {
        setEmail(e.target.value);
        if(confirmpassword != password) {
            setEmailError("Confirm password must match password!");
        } else if(confirmpassword != password) {
            setEmailError("Confirm password must match password!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }



    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    };

    return(
        <div>
            <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    firstnameError ?
                    <p>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    lastnameError ?
                    <p>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } />
                {
                    confirmpasswordError ?
                    <p>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default Form;