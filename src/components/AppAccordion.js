import React from 'react';
import { Accordion } from 'react-bootstrap';

function AppAccordion({ eventKey, title, highlightedText, description, link, comment }) {
  return (
    <Accordion>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ margin: 0 }}>{title}</strong> 
            <a href={link}>View App</a>
          </div>
            <div className="mt-3" style={{ display: 'block' }}>
              {highlightedText}
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className='text-secondary'>
          {description}
          <br />
          {comment && (
            <>
              <br />
              {comment}
            </>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AppAccordion;
