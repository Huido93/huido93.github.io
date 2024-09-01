import React from 'react';
import { Container,Card } from 'react-bootstrap';

function Introduction() {
  return (
    <Container className="mt-5">
      <h1 className='mb-3'>About Me</h1>
      <Card>
          <Card.Body>
            <h5 className='mb-3'>
              Hello! My name is Huido Park. 
            </h5>
            <p>
              Developing or writing code is not my occupation, but I enjoy making stuff and learning new things. 
              This portfolio showcases some of the projects and applications I've worked on in my free time.
            </p>
            <p>
              As you might notice in the list of apps I have created, I have a interest and quite a passion for sports and exercise.
              I plan to make more apps in the future that might help me and others pursue their goals in sports and fitness.
            </p>
            <p>
              Feel free to explore my portfolio and get in touch if you have any suggestions or questions about me. 
            </p>
            <p className='text-secondary'>
              Email: dhdpark@gmail.com
            </p>
          </Card.Body>
      </Card>
    </Container>
  );
}

export default Introduction;