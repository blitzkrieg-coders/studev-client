import React, { useContext } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { Card, Row, Col } from 'react-bootstrap';

const UserAnalytics = ({ user: { gitHubLogin, repositoriesStats } }) => {
  return (
    <Card>
      <Row>
        <Col>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={repositoriesStats}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey='language' />
            <PolarRadiusAxis />
            <Radar
              name={gitHubLogin}
              dataKey='commits'
              stroke='#8884d8'
              fill='#8884d8'
              fillOpacity={0.6}
            />
          </RadarChart>
        </Col>
        <Col className='my-auto'>
          <BarChart width={730} height={300} data={repositoriesStats}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='language' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='amount' fill='#8884d8' />
          </BarChart>
        </Col>
      </Row>
    </Card>
  );
};

export default UserAnalytics;
