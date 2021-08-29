import React, { useContext } from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';

const UserInfo = ({
  user: { avatarUrl, gitHubLogin, location, school, career },
}) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Image height={100} width={100} src={avatarUrl} roundedCircle />
          </Col>
          <Col>
            <h2>{gitHubLogin}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <p>{location}</p>
          </Col>
          <Col>
            <Row>
              <Col>
                <p>{school}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{career}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
