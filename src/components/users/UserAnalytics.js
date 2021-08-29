import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
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
          name={gitHubLogin}
          dataKey='commits'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
      </RadarChart>
      <PieChart width={730} height={250}>
        <Pie
          data={repositoriesStats}
          dataKey='commits'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={50}
          fill='#8884d8'
        />
      </PieChart>
    </Card>
  );
};

export default UserAnalytics;
