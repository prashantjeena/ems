import React, { useEffect, useRef, useState } from 'react';
import styles from './modal.module.css';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './officeimage10.jpeg';

import { Form } from 'react-bootstrap';
const Modal = (props) => {

	const ref = useRef(null);
	const [isLoggedIn,setIsLoggedIn]=useState(false);
	const [redirector,setRedirector]=useState(false);
	const [username,setUsername]= useState('');
	const [password,setPassword]=useState('');
	const user= 'ace';
	const pw="luffy";

	const handleClickOutside = (e) => {
			if (ref && ref.current && ref.current.contains(e.target)) {
				return;
			}
			// outside click
			props.handleClose();
	}

	const myChangeHandler = (event) => {
		if(event.target.id==='username' && setUsername(event.target.value));
		if(event.target.id==='password' && setPassword(event.target.value));
		console.log(username,password);
	}
	

  const login = () => {
		setRedirector(true);
		setIsLoggedIn(true);
  }

	useEffect(() => {
			document.addEventListener("click", handleClickOutside, true);
			return () => {
				document.removeEventListener("click", handleClickOutside, true);
			}
	});


	if (redirector) {
		return (
			<Redirect to={'/dashboard'}/>
		)
	}

	return (


	<div  ref={ref}>
		<Form className={styles.form}>
		<img class="fluid col-md-4 m-1" src={Logo} />

		<label for="username" class='sr-only'>username</label>
		<input
			id="username"
			type="text"
			placeholder='username'
			onChange={myChangeHandler}
			class='form-control'
			required
			autoFocus
		/>

		<label for="password" class='sr-only'>password</label>
		<input
			id='password'
			type="password"
			placeholder="password"
			onChange={myChangeHandler}
			class='form-control'
			required
			autoFocus
		/>
		

		<div class="form-check mb-2 mr-sm-2">
			<input
				class="form-check-input"
				type="checkbox"
				id="inlineFormCheck"
			/>
			<label class="form-check-label" for="inlineFormCheck">
				Remember me
			</label>
 		 </div>	

		<div class="mt-3">
			<button class="btn btn-lg btn-primary btn-block" onClick={login}> Login</button>
		</div>
		</Form>
	</div>
	);
};

export default Modal;