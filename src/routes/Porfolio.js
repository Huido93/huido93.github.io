import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import AppAccordion from '../components/AppAccordion';

function Porfolio() {
  return (
    <>
    <Container className="mt-5">
      <h1 className="mb-5">My Apps</h1>
      
      <h2 className='text-secondary'>Fitness and Training</h2>
      <Row className="mb-4">
        <Col md={12}>
            <AppAccordion
              eventKey="0"
              title="🏋️ Athlete Management"
              highlightedText="This app is designed for athletes and fitness enthusiasts to log and track their workouts efficiently."
              description={
                <>
                  This app allows users to record exercises, sets, reps, and weights lifted during each workout session.
                  Users can also monitor their progress over time, and analyze their performance with detailed statistics.
                  The app is perfect for anyone looking to take their training to the next level by keeping a comprehensive workout history.
                </>
              }
              link="https://huido93.github.io/athlete_management"
              comment={
                <small className='text-secondary'>Note: This app is up and running but is still in development, so look forward to more updates to come!
                Requires register and login.
                </small>
              }
            />

            <AppAccordion
              eventKey="1"
              title="💪 One RM Calculator"
              highlightedText="The One Rep Max (RM) Calculator is a handy tool for strength athletes and gym-goers to calculate their maximum lift for any exercise."
              description={
                <>
                  By inputting the weight lifted and the number of reps performed, the calculator estimates the maximum amount of weight that can be lifted for a single repetition (1RM),
                  and also displays a handy table that estimates weights for the 1~10 rep range. There are many formulas out there for calculating the 1RM, so choose the one that meets your needs.
                </>
              }
              link="https://huido93.github.io/oneRMCalculator"
            />
        </Col>
      </Row>
      
      <h2 className='text-secondary'>Lifestyle and Finance</h2>
      <Row className="mb-4">
        <Col md={12}>
            <AppAccordion
              eventKey="2"
              title="🧾 Expense Settler"
              highlightedText="The Expense Settler app is designed to simplify the process of managing shared expenses among friends, family, or roommates."
              description={
                <>
                  Whether it's a group trip, shared household costs, or splitting bills at a restaurant, this app helps users keep track of who owes what.
                  It automatically calculates and simplifies the transactions needed to settle up, making it easier for everyone to stay on top of their finances without awkward conversations about money.
                  You can even select the beneficiaries for each expense, and generate a URL for the group to share so each participant can access the link to log their own expenses!
                </>
              }
              link="https://huido93.github.io/expense-settler"
            />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Porfolio;