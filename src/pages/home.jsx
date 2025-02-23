import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#333', minHeight: '100vh', padding: '20px' }}>
      <Card sx={{ backgroundColor: 'lightgray', marginBottom: '20px', maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
        <CardContent>
          <Typography variant="h2" sx={{ fontSize: '2rem' }}>Highlights</Typography>
          <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>Remember to live out our values</Typography>
          <ol>
            <li>Relentless Learning and Growth</li>
            <li>Creative Problem Solving</li>
            <li>Curiosity-Driven Exploration</li>
          </ol>

          <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>Upcoming Events</Typography>
          <ul>
            <li><b>Feb 7: </b> Employee Hack-a-ston</li>
            <li><b>Mar 7: </b> Food Bank Volunteering</li>
            <li><b>Apr 4: </b> Company Retreat</li>
          </ul>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: 'lightgray', marginBottom: '20px', maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
        <CardContent>
          <Typography variant="h2" sx={{ fontSize: '2rem' }}>Latest Event</Typography>
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis animi laudantium eos atque sed debitis eum deleniti cumque saepe aut voluptatibus, dolores commodi corporis quibusdam
            numquam perferendis, molestias tenetur suscipit!.
          </Typography>
          <img
            src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=2970&auto=format&fit=crop"
            style={{ width: '35%', marginRight: '10px' }}
            alt="Kickball outing"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f?q=80&w=2971&auto=format&fit=crop"
            style={{ width: '35%' }}
            alt="Happy Hour"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;