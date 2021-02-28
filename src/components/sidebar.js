import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/sidebar.module.css';
import styled from 'styled-components';

const Sidebar=()=> {
  return(
    <div className={styles.sidebar}>
      <ul>
        <Link to = '/dashboard'>
          <li>Employee list </li>
        </Link>
        <Link to= '/createEmployee'>
          <li>Create a new employee</li>
        </Link>
        <Link to='/modifyEmployee'>
          <li>Modify an existing employee</li>
        </Link>
        <Link to='/deleteEmployee'>
         <li>Delete an employee</li>
        </Link>
        
      </ul>
    </div>
  )

}

export default Sidebar;
