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
import NavigationBar from './nav.js';
import Slideshow from './components/slideshow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout.js';
import Jumbotron from './components/jumbotron.js';
import Logo from './sidebar.jpeg';
import Footer from './components/footer.js';

import { Button , Container, Row,Col} from 'react-bootstrap';


function App () {


	return (
	<>
	<NavigationBar/> 
	<Container>
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
	</Container>
	</>
 )
};

export const Home = () => {
	const [show,setModalShow] = useState(false);
	const [showLogin,setLoginShow]=useState(true);
	
  const showModal = () => {
    setModalShow(true);
		setLoginShow(false);
  };

  const hideModal = () => {
    setModalShow(false);
		setLoginShow(true);
  };

	return(
		<main >
			<Container fluid>				
				<Row>
					<Col xs={2}>
					<img  className={styles.logo} src={Logo} alt="logo"/>
					</Col>
					<Col xs={8}>
						<Jumbotron/>
					</Col>

					<Col >
					<div  className={styles.App}>
					{show && <Modal  handleClose={hideModal}>
						</Modal>}
					{ showLogin && <Button variant="primary" onClick={showModal} >
						Login
					</Button>}	
					</div>
					</Col>
				</Row>
				<Row>
					<Col xs={2} >
						<Sidebar/>
					</Col>
					<Col>
					<h1>
						<Slideshow/>
					</h1>
					</Col>

				</Row>
				<Row>
					<Col>
						<Footer/>
					</Col>
				</Row>
	
		</Container>
	</main>
	)

}

export default App;