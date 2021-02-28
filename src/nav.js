import React ,{useState} from "react";
import {Button,Nav,Navbar, NavbarBrand} from 'react-bootstrap';
import styled from 'styled-components';
import styles from './nav.module.css';
import Modal from './modal.js';

// const Styles = styled.div`
// 	.navbar{
// 		backgroud-color: #222;
// 	}
// 	.navbar-NavbarBrand, .navbar-nav, nav-link{
// 		color:#bbb;

// 		&:hover{
// 			color:white;		backgroud-color: black;
// 		}
// 		.navbar-NavbarBrand, .navbar-nav, nav-link{
// 			color:#bbb;
	
// 			&:hover{
// 				color:white;
// 			}
// 		}
// 	`;
	
const NavigationBar = ()=> {

		
	return(

	<div>
			<Navbar expand="lg" className={styles.navbar} >
				<NavbarBrand  >EMS</NavbarBrand>
				<Navbar.Toggle area-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto" >
						<Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
						<Nav.Item><Nav.Link href='/dashboard'>Dashboard</Nav.Link></Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			</div>
	);
}

export default NavigationBar;
