import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  Legend,
  Tooltip,
  RadialBar,
} from 'recharts';
import { Card } from 'react-bootstrap';

const UserAnalytics = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { avatarUrl, gitHubLogin, repositoriesStats } = user;
  return (
    <Card>
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
          name='Mike'
          dataKey='commits'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
      </RadarChart>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius='10%'
        outerRadius='80%'
        data={repositoriesStats}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: '#666', position: 'insideStart' }}
          background
          clockWise={true}
          dataKey='commits'
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout='vertical'
          verticalAlign='middle'
          align='right'
        />
        <Tooltip />
      </RadialBarChart>
    </Card>
  );
};

export default UserAnalytics;
