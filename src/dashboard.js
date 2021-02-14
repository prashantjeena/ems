import React, {useState,useEffect} from 'react';
import styles from './dashboard.module.css';
import {Link} from 'react-router-dom';
import Nav from './nav.js';

function Dashboard () {
	const [empList,setEmpList]=useState([]);

	useEffect(()=>{
		fetch('http://localhost:4041/employees')
		.then(response => response.json())
		.then((data)=>
		{setEmpList(data.employees);
			console.log(data.employees);
		});
		console.log(empList);
	},[setEmpList]);

	return (
		<main >
			<Nav/>
			
			<h3 className="main" >
				<p className="title"> 	
					Employee List
				</p>
				<ul className="item"> {empList.map((ob)=>{
					const empName=ob.employee_name;
					const employeeSalary=ob.employee_salary;
					const employeeAge= ob.employee_age;
					const id = ob.id.toString();
					return (
						<div >
							<li className='empNames'>
								<Link to={{
									pathname:'/employeeDetails/'+id,
									state:{id:ob.id,
										emp: empList.filter(e=>e.id==ob.id),
									}

								}}	>
									{empName}
								</Link>
							</li>
						</div>
					)})}
				</ul>

				<div className="button">
					<Link to='/createEmployee' >
							Create new employee			
					</Link>
				</div>
				
				
			</h3>

		</main>
    )
}

export default Dashboard;