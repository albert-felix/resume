import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const AboutMe = () => {
  return(
    <div className='header'>
      <Container>
        <Row>
          <Col>
            <h3>ALBERT FELIX L</h3>
            <br/>
            <p className="shrink">I'm a self motivated person having 
              creative mind and always up for new challenges.</p>
          </Col>
          <Col>
            <div className="right">
              <p>albertfelixleo@gmail.com</p>
              <p>+91 9788061021 / 7502540825</p>
              <p>Chennai, TamilNadu, India</p>
              <p>October 4, 1994</p>
            </div>
          </Col>
        </Row>
        <hr/>
      </Container>
    </div>
  )
};

export default AboutMe;