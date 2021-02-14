import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


function EmployeeDetail (props) {
	const [empData,setEmpData]=useState([]);
	const address='http://localhost:4041/employee/'+props.location.state.id.toString();


	useEffect(()=>{
		fetch(address)
		.then(response => response.json())
		.then((data)=>{
			setEmpData(data.employee[0]);
			console.log(data.employee);
		});
		console.log(empData);
	},[setEmpData]);
	
	// const { params: { empId } } = props.match;
	

	return (
		<main >	
			<h3 className="main" >
				<p className="title"> 
					Employee Data
				</p>
				<ul > {
						<div >
							<p>This is the salary of Mr {empData.employee_name} : {empData.employee_salary} </p>
							<p>This is the Age of Mr {empData.employee_name} : {empData.employee_age} </p>
						</div>
						
				};
				</ul>		
			</h3>

			<Link to='/dashboard'>
					back
			</Link>
			

		</main>
	)
    
}

export default EmployeeDetail;