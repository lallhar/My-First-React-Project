import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>What is hard-work? Firstly, it is important to define what hard work is, so that it can later be analysed. Hard work means not just working, but really giving our work our very best effort.</p>
              <p>Work can be several things. It is sometimes used synonymously with employment. Or, work can be anything that requires effort such as housework or working on a relationship.</p>
              <p>Hard work does not have to mean that we find work difficult, arduous or unenjoyable. Working hard can be something exhilarating and enjoyable which feels wonderfully rewarding.</p>
              <p>Hard work is important for many reasons. Below are some of the main ones.

Getting things done: if we work hard, we can get so much more done.
Positivity: giving something our very best effort is a wonderfully positive feeling.
Discipline: working hard teaches us to develop our self-discipline.
No regrets: if we know that we tried our best, we will not have to live with regrets.</p>
              <p></p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>Enjoyment: hard work can actually be very enjoyable.
Achievement: sometimes, we do not know all of the amazing things that we can achieve until we work hard.
Required: hard work is often required from us – whether at school or university or when we are working on projects for our boss.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
