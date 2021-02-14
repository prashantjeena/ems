import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './employee.css';
import Nav from './nav.js';

function CreateEmployee(){
	const [created,setCreated]=useState(false);
	const [formValues,setFormValues]=useState({
		name:'',
		salary:null,
		age:null
	});
	
	const handleChangeName=(event)=>{
		setFormValues((values)=>({
			...values,
			name:event.target.value,

	}))
	console.log(formValues);
	};


	const handleChangeSalary=(event)=>{
		setFormValues((values)=>({
			...values,
			salary:event.target.value,
	}))};
	const handleChangeAge=(event)=>{
		setFormValues((values)=>({
			...values,
			age:event.target.value,
	}))};

	
	const handleSubmit=()=>{
		fetch('http://localhost:4041/addemployee', {
		method: 'post',
		headers: {
      // 'Content-Type': 'application/json',
			 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: {
			data:formValues
		}
	 })
	 .then(response=> {
		console.log(response);
		
	 	});
	 	
	};


	return(
		<main>
			<Nav/>
			<div className='form'>
			<input
					id="name"
					className="form-field"
					type="text"
					placeholder="Employee Name"
					name="Employee Name"
					value={formValues.name}
					onChange={handleChangeName}
			/>

			<input
					id="salary"
					className="form-field"
					type={Number}
					placeholder="Salary"
					name="Salary"
					value={formValues.Salary}
					onChange={handleChangeSalary}
			/>

			<input
					id="age"
					className="form-field"
					type={Number}
					placeholder="Age"
					name="Age"
					value={formValues.age}
					onChange={handleChangeAge}
			/>

			<button className='button form-field' onClick={handleSubmit}>
				<Link to='/dashboard'>
					Submit
				</Link>
			</button>


			</div>
		</main>

		)

}
export default CreateEmployee;