import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars'


export default function MediaCard({data,viewDetails}) {
    return (
        <Card sx={{width: 280, marginLeft:10 , marginBottom:10 }}>
            <div className='image'>
                <img src={data.image}  alt=''/>
            </div>
            <CardMedia/>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {data.title.slice(0,20)}...
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
               Price {data.price} $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.description.slice(0,61)}......
                </Typography>
                <ReactStars
                    count={5}
                    value={3}
                    edit={false}
                    size={26}
                    color2={'#ffd700'} />
            </CardContent>
            <CardActions>
                <Button style={{backgroundColor:'green',color: '#fff',padding:5}} size="small">Add to Cart</Button>
                <Button onClick={()=>viewDetails(data.id)} style={{border:"2px solid green",color: 'black'}} className='hov'  size="small">view Details</Button>
            </CardActions>
        </Card>
    );
}
