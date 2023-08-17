import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { usepostsContext } from '../hooks/usepostcontext';
import { useAuthContext } from '../hooks/useauthcontext';


function Postdetails ({post}) {
  const {dispatch}=usepostsContext();
  const {user}=useAuthContext();
  const deleteclick=async()=>{
    if(!user){
      return;
    }
    const response = await fetch('/api/posts/'+ post._id,{
      method:'DELETE',
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    })
    console.log(response);
    const json= await response.json();
    if(response.ok){
      dispatch({type:'DELETE_POST',payload:json})
    }
    else{
      console.log("delete not run");
    }
  }
  return (
    <Card sx={{ maxWidth: 1700}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.foodtype}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Location : {post.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity : {post.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          District : {post.district}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          timetodecay : {post.timetodecay}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <button onClick={deleteclick}>
          Delete
        </button>
      </CardActions>
    </Card>
  );
}
export default Postdetails;