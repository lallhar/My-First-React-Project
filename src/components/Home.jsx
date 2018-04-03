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
            <p>The front-end developer creates interaction and user experience with scripts embedded in a site’s HTML. Everything a visitor to your site sees, clicks, or uses to input or retrieve information is the work of the front-end developer who creates client-side software that brings the site’s design to life. Scripts are downloaded by the browser, processed, and then run apart from the server.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/pexels-photo-147238.jpeg" circle className="profile-pic"/>
            <h3>Sri</h3>
            <p>This takes equal parts technology and vision. Front-end developers are the bridge between the designer and the back-end programmer, which means they have to be both creative and tech-savvy. Wondering how a designer’s final design becomes a living, breathing site? That’s front-end code in action—code that breaks the design down into components, then delivers information and functionality made possible by the back-end developer.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/pexels-photo-590491.jpeg" circle className="profile-pic"/>
            <h3>Kota</h3>
            <p>Overall, they’re creating a web-based application that comes as close to a desktop experience as possible. Their focus is on user experience, and the technology they implement will hinge on how well it accomplishes that speed, efficiency, and smooth functionality.</p>
          </Col>
        </Row>

                
            </Grid>
        )
    }
}