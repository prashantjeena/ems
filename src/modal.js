import React, { useEffect, useRef, useState } from 'react';
import './modal.css';
import {Redirect} from 'react-router-dom';
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
		if(event.target.id=='username' && setUsername(event.target.value));
		if(event.target.id=='password' && setPassword(event.target.value));
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
			<Redirect to={'/about'}/>
		)
	}

	return (


			<div classname="modal" ref={ref}>
				<section className="modal-main">
				<form>
        <h1> {username}</h1>
        <input
					id='username'
					type="text"
					placeholder="username"
					onChange={myChangeHandler}
        />
        <input
					id='password'
					type="password"
					placeholder="password"
					onChange={myChangeHandler}
        />

				<button onClick={login}> Submit</button>
      	</form>

					<button type="button" onClick={props.handleClose}>
						Close window
					</button>
				</section>
			</div>
	);
};

export default Modal;