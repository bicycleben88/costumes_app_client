import React from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../App';

const Signup = (props) => {
    //Deconstruct globalState and setGlobalState and pass into useContext
    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const { url } = globalState;

     //create empty user object
    const blank = {
        username: '',
        password: ''
    };

    //Define state and setState for form 
    const [form, setForm] = React.useState(blank);

    //Allow user to type into text field
    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

     //When user clicks Sign Up
    const handleSubmit = (event) => {
        //stop page from reloading
        event.preventDefault();
         //deconstruct username and password from state
        const {username, password} = form
        //make API call
        fetch(`${url}/auth/signup`, {
            //enter method details
            method: "post",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
            })
        //convert response to json
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //add token from logged-in user to globalState
            setGlobalState({...globalState, token: data.token})
            //reset the form
            setForm(blank);
            //send user to log in page
            props.history.push('/login');
        });

    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={form.username} onChange={handleChange} />
                <input type="password" name="password" value={form.password} onChange={handleChange} />
                <input type="submit" value="Sign Up" />
            </form>
        </>
    )
}

export default Signup