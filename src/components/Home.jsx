import React from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron,  Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

    const Home=()=>{

    
    return (
        <div>
      
                        <Jumbotron>
                        <h2>Welcome to CodeVita</h2>
                        <p>This is how to build a website with React</p>
                        <Link to="/about">
                            <Button bsStyle="primary">Learn More</Button>
                        </Link>
                        </Jumbotron>
                        <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
                            <h3>Frank</h3>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
                            <h3>Vanessa</h3>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
                            <h3>Riff</h3>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                        </Col>
                        </Row>
        </div>
    );
  }
export default Home;
