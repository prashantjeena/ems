import React, { useState } from "react";
import Modal from './modal.js';
import styles from './app.module.css';
import About from './about.js';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard.js';
import EmployeeDetail from './employeeDetails.js';
import CreateEmployee from './createEmployee.js';
import ModifyEmployee from './modifyEmployee.js';
import DeleteEmployee from './deleteEmployee.js';
import Sidebar from './components/sidebar.js';
import Navbar from './nav.js';


function App () {


	return (
	<>
		<Router>	
			<Switch>
				<div>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About}/>
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path="/employeeDetails/:empId" component={EmployeeDetail}/>
					<Route exact path='/createEmployee' component={CreateEmployee}/>
					<Route exact path='/modifyEmployee' component={ModifyEmployee}/>
					<Route exact path='/deleteEmployee' component={DeleteEmployee}/>

				</div>
			</Switch>
		</Router>
	</>
 )
};

export const Home = () => {
	const [show,setModalShow] = useState(false);
	
  const showModal = () => {
    setModalShow(true);
  };

  const hideModal = () => {
    setModalShow(false);
  };

	return(
		<main className={styles.container}>
			<div className={styles.box1}>
			 <Navbar/> 
			</div>
			<div className={styles.box4}>
				{show && <Modal className='App-header' handleClose={hideModal}>
					</Modal>}
				<button  type="button" onClick={showModal}>
					Login
				</button>
			</div>
			<div className={styles.box2}> 
				<Sidebar/>
			</div>
			<div className={styles.box3}>
				<h1>
					This is employee database.
				</h1>
			</div>
			<div className={styles.box5}>
				This is footer
			</div >

			
		</main>
	)

}

export default App;