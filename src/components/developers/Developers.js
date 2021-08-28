import React, { useContext } from 'react';
import DeveloperItem from './DeveloperItem';
import DeveloperContext from '../../context/developer/developerContext';
import { Row, Col } from 'react-bootstrap';

const Developers = () => {
  const developerContext = useContext(DeveloperContext);
  const { developers } = developerContext;
  return (
    <Row>
      {developers.map((developer) => (
        <Col>
          <DeveloperItem key={developer.id} developer={developer} />
        </Col>
      ))}
    </Row>
  );
};

export default Developers;
