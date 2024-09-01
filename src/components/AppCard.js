import React from 'react';
import { Card } from 'react-bootstrap';

function AppCard({ title, description, link, comment }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={link}>View App</Card.Link>
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AppCard;