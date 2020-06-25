import React from 'react';
import useForm from '../hooks/useForm';

import './login.css';

function Signin(props) {

    let [formState, setFormState, clearFormState] = useForm({
        username: '',
        password: '',
        accountType: '',
    });
                
    return (
        <div>
            <h1>Sign in</h1>
            <form className="login-form">
                <label>
                    <p>Username</p>
                    <input
                        type="text"
                        name="username"
                        onChange={setFormState}
                        value={formState.username}
                    />
                </label>

                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        onChange={setFormState}
                        value={formState.businessAddress}
                    />
                </label>

                <label>
                    <p>Account type</p>
                    <select
                        name="accountType"
                        onChange={setFormState}
                        value={formState.accountType}
                    >
                        <option value="business">Business</option>
                        <option value="volunteer">Volunteer</option>
                    </select>
                </label>

                <button>Sign in</button>
            </form>
        </div>
	);
}

export default Signin;