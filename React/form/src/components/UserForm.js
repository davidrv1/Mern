import React, { useState } from  'react';
    
const UserForm = (props) => {
    //the below we set out what we will ask for from the user.
    //we leave the useState empty and simply add quotes instead 
    //in order to allow the user an input
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");   
    
    const createUser = (e) => {
        //created the function createUser
        // we must prevent the default refresh of the 
        //browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        //we create the object to hold the users inputs
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    //their input becomes their "set"
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    };

    //the below is what we want present to the user.
    return(
        <div>
            {/* creates a form that when submit is clicked it calls createUser */}
            <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>
                {/* here we display their inputs by placing them in curly brackets just like when we did in when it came to props.
                only this time, we don't need to write props. simply the variable as it is written in the useState */}
                <label>First Name: </label>{ firstname }
                </p>
                <p>
                <label>Last Name: </label>{ lastname }
                </p>
                <p>
                <label>Email: </label>{ email }
                </p>
                <p>
                <label>Password: </label>{ password }
                </p>
                <p>
                <label>Confirm Password: </label>{ confirmpassword }
                </p>
            </div>
        </div>
    );
};
    
export default UserForm;