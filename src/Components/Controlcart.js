import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ReactStars from 'react-stars'

import Typography from '@mui/material/Typography';


export default function MediaControlCard({ details }) {


  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={details.image}
        alt=""
        className='mediacardimg'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            {details.title}
          </Typography>
          <ReactStars
            count={5}
            value={details.rating.rate}
            size={30}
            edit={false}
            color2={'#ffd700'} />
          <Typography component="div" variant="h6">
            Rs {details.price} $
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {details.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

        </Box>
      </Box>

    </Card>
  );
}