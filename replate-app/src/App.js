import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//Components

import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import NavigationBar from './components/NavigationBar';
import BizProfile from './components/Profiles/BizProfile';
import VolProfile from './components/Profiles/VolProfile';
import CreateBizProfile from './components/Profiles/CreateBizProfile';
import CreateVolProfile from './components/Profiles/CreateVolProfile';
import Dashboard from './components/Dashboard';

//Context

import MainContext from './contexts/MainContext';

//Other

import './App.css';


function App() {

	//Mock API Data

	let [data, setData] = useState({
		accounts: [
			{
				username: 'biz',
				password: 'biz',
				phoneNumber: '1234567890',
				accType: 'busisness',
			},
			{
				username: 'vol',
				password: 'vol',
				phoneNumber: '1234567890',
				accType: 'volunteer',
			}
		],
		
		currAccount: {

			username: '',
			password: '',
			phoneNumber: '',
			accType: '',

		},

		pickupRequests: [
			{
				foodType: 'fruit',
				weight: '1lb',
				pickupDate: '2020-06-27T13:41',
				issuedBy: 'daniel', //Biz acc name that issued it
				requestStatus: 'Available', //Available, In Progress or Complete
				assignedVolunteer: '',
			},
		],
	});


	return (
		<BrowserRouter>
			<MainContext.Provider value={(data, setData)}>
				<NavigationBar />

				<div className="App">
					{/* Add turnary to show correct component for /create-profile and /profile depending on account type that's signed in*/}
					<PrivateRoute exact path="/signup" component={Signup} />
					<PrivateRoute exact path="/login" component={Login} />
					<PrivateRoute
						exact
						path="/create-profile"
						component={CreateBizProfile}
					/>
					<PrivateRoute exact path="/profile" component={BizProfile} />
					{/* <PrivateRoute exact path="/profile" component={VolProfile} /> */}
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
				</div>
			</MainContext.Provider>
		</BrowserRouter>
	);
}

export default App;
