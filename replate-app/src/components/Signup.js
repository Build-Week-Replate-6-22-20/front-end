import React from 'react';
import useForm from '../hooks/useForm';

import './signup.css';

function Signup(props) {

    let [formState, setFormState, clearFormState] = useForm({
			username: '',
			password: '',
			phoneNumber: '',
			accountType: ''
		});

    return (
			<div>
				<h1>Signup</h1>
				<form className="create-acc-form">
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
						<p>Phone Number</p>
						<input
							type="text"
							name="phoneNumber"
							onChange={setFormState}
							value={formState.phoneNumber}
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

					<button>Create</button>
				</form>
			</div>
		);
}

export default Signup;