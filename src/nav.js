import React from "react";
import styles from './nav.module.css';
import {Link} from 'react-router-dom';

function Nav () {

	return (
		<nav>
			<ul className={styles.nav}>
				<Link  to='/about' > 
					<li> about</li>
				</Link>
			</ul>
		</nav>
)

};

export default Nav;