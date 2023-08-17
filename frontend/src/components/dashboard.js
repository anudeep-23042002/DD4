import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {Typography,Box,Button,Card, CardContent,  ListItemIcon} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { UsepostsContext } from '../hooks/usepostcontext';
import { UsepickupContext } from '../hooks/usepickupcontext';
import { useAuthContext } from '../hooks/useauthcontext';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckIcon from '@mui/icons-material/Check';
import { useDonationContext } from '../hooks/usedonationcontext';
import { useNavigate } from 'react-router-dom';
const DonorDashboard = () => {
    const {posts,dispatch} =    UsepostsContext();
    const {pickups,dispatch:pickupdispatch} =   UsepickupContext();
    const {donations,dispatch:donationdispatch}=useDonationContext();
    const {user}=useAuthContext();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [time,settime]=React.useState('00:00');
    
    React.useEffect(()=>{},[pickups]);
    React.useEffect(()=>{},[donations]);
    React.useEffect(()=>{},[posts]);
    const Navigate = useNavigate();
    const handleClickOpen = () => {
    setOpen(true);
    
  };
    const handleok=async(post_id)=>{
        setOpen(false);
        const resp = await fetch('/api/posts/'+post_id,{
            method : 'POST',
            body:JSON.stringify({time}),
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${user.token}`
              }
        }
        )

    }
    const handleClose = () => {
       setOpen(false);
  };
    
    React.useEffect(()=>{
        const fetchposts= async()=>{
            const resp = await fetch('/api/posts',{
                headers:{
                'Authorization': `Bearer ${user.token}`
                }
            });
            const json= await resp.json();
            if(resp.ok){
                dispatch({type : 'SET_POSTS',payload:json});
            }
        }
        const fetchdonations= async()=>{
            const resp = await fetch('/api/posts/donations',{
                headers:{
                'Authorization': `Bearer ${user.token}`
                }
            });
            const json= await resp.json();
            if(resp.ok){
                donationdispatch({type:'SET_DONATIONS',payload:json})
            }
        }
        const fetchpickups= async()=>{
            const resp = await fetch('/api/posts/pickups',{
                headers:{
                'Authorization': `Bearer ${user.token}`
                }
            });
            const json= await resp.json();
            if(resp.ok){
                pickupdispatch({type : 'SET_PICKUPS',payload:json});
            }
        }
        if(user && user.role==='Donor'){
           fetchdonations();
        }
        else if(user){
            fetchpickups();
            fetchposts();
        }
    },[user,dispatch])

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleCloseconfirm=async(post_id)=>{
    setOpen1(false);
    const resp = await fetch('/api/posts/'+post_id,{
        headers:{
            'Authorization': `Bearer ${user.token}`
          }
    }
    )
    
    const fetchpickups= async()=>{
        const resp = await fetch('/api/posts/pickups',{
            headers:{
            'Authorization': `Bearer ${user.token}`
            }
        });
        const json= await resp.json();
        if(resp.ok){
            pickupdispatch({type : 'SET_PICKUPS',payload:json});
        }
    }
    if(user){
        console.log("heyy")
        fetchpickups();
    }
  }
  const onDelete=async(post_id)=>{
    console.log(post_id);
    const response = await fetch('/api/posts/' +post_id, {
        method: 'DELETE',
        headers:{
            'Authorization': `Bearer ${user.token}`
          }
      })
      const json = await response.json()
  
      if (response.ok) {
        donationdispatch({type: 'DELETE_DONATION', payload: json})
      }
      Navigate('/dashboard')

  }
    return (
            <div>
                
            <Box style={{marginTop:'70px'}}>
                <Box display="flex"
                justifyContent="center" // Center horizontally
                alignItems="center" // Center vertically
                sx={{ height: '10%' }}>
            {user && (<Card sx={{ maxWidth: 350} }>

                <CardContent>
                    <Typography variant="h5" component="div">
                        {user.username}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Food {user.role}
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary={user.email} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={user.phone} />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>)}
            
               </Box>
                </Box>
                <Box>
                <Card >
                    <CardContent>
                    
                    {user && user.role==='Recipient' && (<Card>
                        <Typography variant="h5" component="h3" gutterBottom>
                           Your Pickups
                        </Typography>
                        <List>
                        {(!pickups || pickups.length===0) && (
                                <div>
                                    No Pickups to show
                                </div>
                            )}
                       
                            {pickups && pickups.map(donation => (
                                    <ListItem key={donation._id}>
                                        <ListItemText>                                     
                                        <Typography variant="h5" component="h3" gutterBottom>{donation.food}</Typography>
                                            <Typography variant="body2" component="h3" gutterBottom>Pickup time : {donation.pickuptime} </Typography>
                                            <Typography variant="body2" component="h3" gutterBottom>Donor phone number : {donation.donor_phone} </Typography>
                                            <Typography variant="body2" component="h3" gutterBottom>Location: {donation.location}</Typography>
                                        </ListItemText> 
                                        {donation.status!=="donated" && (
                                        <Button variant="contained" 
                                        style={{ backgroundColor: '#fa1937', color: 'white' }} 
                                        startIcon={<CheckIcon/>}
                                         onClick={handleClickOpen1}>
                                            Received
                                        </Button>
                                        )}
                                            <Dialog open={open1} onClose={handleClose1}>
                                                <DialogTitle>Is Donation Pickedup</DialogTitle>
                                                <DialogContent>
                                                <DialogContentText>
                                                    Did you pickup your donation
                                                </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                <Button onClick={handleClose1} color="primary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={()=>handleCloseconfirm(donation._id)} color="primary">
                                                    Confirm
                                                </Button>
                                                </DialogActions>
                                            </Dialog>                       
                                    </ListItem>
                              
                            ))}
                            
                            
                        </List>
                        
                        </Card>)}
                    
                    {user && user.role==='Recipient' && (<Card>
                        <Typography variant="h5" component="h3" gutterBottom>
                            Donations
                        </Typography>
                        
                        {(!posts || posts.length===0) && (
                            <Typography variant="body1" component="h3" gutterBottom>
                                No donations to show
                            </Typography>
                            )}
                        <List>
                            {posts && posts.map(donation => (donation.pickuptime==='2400' && (
                                    <ListItem key={donation.id}>
                                        <ListItemText>
                                        <Typography variant="h5" component="h3" gutterBottom>{donation.food}</Typography>
                                            <Typography variant="body2" component="h3" gutterBottom>Location :{donation.location}</Typography>
                                        </ListItemText>
                                        <Button 
                                                variant="contained" 
                                                style={{ backgroundColor: '#fa1937', color: 'white' }} 
                                                startIcon={<LocalShippingIcon/>}
                                                onClick={handleClickOpen}
                                            >
                                                Pickup
                                            </Button>
                                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                                <DialogTitle id="form-dialog-title">Select Time</DialogTitle>
                                                <DialogContent>
                                                <TextField
                                                    id="time"
                                                    label="Alarm clock"
                                                    type="time"
                                                    value={time}
                                                    onChange={(e)=>{settime(e.target.value)}}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                    inputProps={{
                                                    step: 300, // 5 min
                                                    }}
                                                />
                                                </DialogContent>
                                                <DialogActions>
                                                <Button onClick={handleClose} color="primary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={(e)=>handleok(donation._id)} color="primary">
                                                    Ok
                                                </Button>
                                                </DialogActions>
                                            </Dialog>                                             
                                    </ListItem>
                              
                            )))}
                            
                            
                        </List>
                        
                        </Card>)}
                        {user && user.role!=='Recipient' && (<Card>
                            <Typography variant="h5" component="h3" gutterBottom>
                                Your Donations
                            </Typography>
                            
                            {(!donations || donations.length===0) && (
                                <div>
                                    No Donations to show
                                </div>
                            )}
                        <List>
                            {donations && donations.map(donation => (
                                    
                                    <ListItem key={donation.id}>
                                        <ListItemText>
                                        <Typography variant="h5" component="h3" gutterBottom>{donation.food}</Typography>
                                            {donation.status=='assigned' && (
                                            <Typography variant="body2" component="h3" gutterBottom>Pickup time :{donation.pickuptime}</Typography>)}
                                            
                                        
                                        
                                            <Typography variant="body2" component="h3" gutterBottom>Status :{donation.status}</Typography>
                                        </ListItemText>
                                        
                                        {donation.status!='donated' && (<Button 
                                                variant="contained" 
                                                style={{ backgroundColor: '#fa1937', color: 'white' }} 
                                                startIcon={<DeleteIcon />}
                                                onClick={(e)=>{onDelete(donation._id)}}
                                            >
                                                Delete
                                            </Button>)}  
                                             

                                    </ListItem>
                            ))}
                        </List>
                        
                        </Card>)}
                    
                </CardContent>
                </Card>
                {user && user.role!=='Recipient' && (<Button href="/newpost" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                    List New Donation
                </Button>)}
            </Box>
        </div>
    );
};

export default DonorDashboard;

