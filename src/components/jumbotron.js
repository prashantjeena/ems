import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles= styled.div``;

const Jumbotron = ()=> (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className='overlay'>
        <Container>
          <h1>Welcome </h1>
          <p>This is Employee Management system</p>
        </Container>
      </div>
    </Jumbo>
  </Styles>
)


export default Jumbotron;