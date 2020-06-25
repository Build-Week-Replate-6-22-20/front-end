import React, { useContext } from 'react';

import useForm from '../../hooks/useForm';

import MainContext from '../../contexts/MainContext';

import './volprofile.css';

function VolProfile(props) {
	//State

	const { data, setData } = useContext(MainContext);

	let [formState, setFormState, clearFormState] = useForm({
		username: '',
		volunteerName: '',
		phoneNumber: ''
	});

	return (
		<div>
			<h1>Volunteer Profile</h1>

			<div id="vol-profile-info">
				<p>Username: {data.currAccount.username}</p>
				<p>Volunteer Name: {data.currAccount.volunteerName}</p>
				<p>Phone Number: {data.currAccount.phoneNumber}</p>
			</div>

			<form className="vol-profile-form">
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
					<p>Volunteer Name</p>
					<input
						type="text"
						name="volunteerName"
						onChange={setFormState}
						value={formState.volunteerName}
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
				<div className="profile-controls">
					<button>Update</button>
					<button className="delProfile">Delete Profile</button>
				</div>
			</form>
		</div>
	);
}

export default VolProfile;
