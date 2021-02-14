import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './employee.css';

function DeleteEmployee(){
	const [formValues,setFormValues]=useState({
    id:''
	});
	
  const handleChangeId=(event)=>{
		setFormValues((values)=>({
			...values,
			id:event.target.value,
	}))};

	
	const handleSubmit=()=>{
		fetch('http://localhost:4041/deleteemployee', {
		method: 'delete',
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

			<button onClick={handleSubmit}>
				Delete Employee
			</button>


			</div>
		</main>

		)

}
export default DeleteEmployee;