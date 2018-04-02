import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Button, Col, Image }  from 'react-bootstrap';
import './Home.css'; 



export default class Home extends Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2> Welcome to My First React Project</h2>
                    <p>This is how to build a website with react, react-bootstrap and react-router</p>

                    <Link to="/about">
                <Button bsStyle="primary">About</Button>
                </Link>

                </Jumbotron>
                <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/pexels-photo-91217.jpeg" circle className="profile-pic"/>
            <h3>Harsha</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/pexels-photo-147238.jpeg" circle className="profile-pic"/>
            <h3>Sri</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/pexels-photo-590491.jpeg" circle className="profile-pic"/>
            <h3>Kota</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.</p>
          </Col>
        </Row>

                
            </Grid>
        )
    }
}