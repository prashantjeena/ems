import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import './employee.css';

function ModifyEmployee(){
	const [formValues,setFormValues]=useState({
    id:'',
		name:'',
		salary:null,
		age:null
	});
	
  const handleChangeId=(event)=>{
		setFormValues((values)=>({
			...values,
			id:event.target.value,
	}))};

	const handleChangeName=(event)=>{
		setFormValues((values)=>({
			...values,
			name:event.target.value,
	}))};


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
		fetch('http://localhost:4041/modifyemployee', {
		method: 'put',
		headers: {
      'Content-Type': 'application/json',
    },
		body: {
			data:JSON.stringify(formValues)
		}
	 })
	 .then(response=> console.log(response));
	};


	return(
		<main>
			<div className='form'>
      <input
					id="id"
					class="form-field"
					type="text"
					placeholder="Employee id"
					name="employee id"
					value={formValues.id}
					onChange={handleChangeId}
			/>

			<input
					id="name"
					class="form-field"
					type="text"
					placeholder="Employee Name"
					name="Employee Name"
					value={formValues.name}
					onChange={handleChangeName}
			/>

			<input
					id="salary"
					class="form-field"
					type={Number}
					placeholder="Salary"
					name="Salary"
					value={formValues.Salary}
					onChange={handleChangeSalary}
			/>

			<input
					id="age"
					class="form-field"
					type={Number}
					placeholder="Age"
					name="Age"
					value={formValues.age}
					onChange={handleChangeAge}
			/>

			<button onClick={handleSubmit}>
				<Link to='/dashboard'>
					Modify Employee Details
				</Link>
			</button>


			</div>
		</main>

		)

}
export default ModifyEmployee;