import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person1.jpeg" className="about-profile-pic" rounded />
            <h3>Sri Harsha Kota</h3>
            <p>Have you ever looked at your favorite website and wondered exactly what made it tick? Have you looked at the way it was laid out, the way the buttons acted when you clicked them, or any other part and thought, “I wonder how complicated that is?” or, “I wish I could do that”?</p>
            <p>All of those things are front end development. While web design is the way a website looks, front end development is how that design actually gets implemented on the web.</p>
            <p>Front end developers use HTML, CSS, and JavaScript to code the website and web app designs created by web designers. The code they write runs inside the user’s browser (as opposed to a back end developer, whose code runs on the web server). Think of it a little like this: the back end developer is like the engineer who designs and creates the systems that make a city work (electricity, water and sewer, zoning, etc.), while the front end developer is the one who lays out the streets and makes sure everything is connected properly so people can live their lives (a simplified analogy, but you get the rough idea). They’re also in charge of making sure that there are no errors or bugs on the front end, as well as making sure that the design appears as it’s supposed to across various platforms and browsers.</p>
            <p>I’ve combed through dozens of front end developer job listings to see which skills are the most in-demand right now. These are the things that real employers are looking for in job applicants today (and will still be looking for in the near future). Master these things and you’re certain to land an awesome front end dev job!</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
