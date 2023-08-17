import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UsepostsContext } from '../hooks/usepostcontext';
import { useAuthContext } from '../hooks/useauthcontext';
import { useNavigate } from 'react-router-dom';
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const defaultTheme = createTheme();
function Newpost(){
    const [food,setfood]=React.useState(null);
    const [status,setstatus]=React.useState('ready to donate');
    const [location,setlocation]=React.useState(null);
    const [error,seterror]=React.useState(null);
    const {dispatch}=UsepostsContext();
    const {user}=useAuthContext();
    const Navigate = useNavigate();
    const submitform=(async(e)=>{
        e.preventDefault();
        if(!user){
          seterror('you must me logged in')
          return;
        }
        setstatus("ready to donate")
        
        const post={food,status,location};
        console.log(post)
        const resp= await fetch('/api/posts',{
            method : 'POST',
            body : JSON.stringify(post),
            headers : {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json= await resp.json();
        if(resp.ok){
            setfood('');
            setstatus('');
            setlocation('');
            dispatch({type:'CREATE_POST',payload:json});   
        }

        else{
            seterror(true);
            console.log(json);
        }
        Navigate('/dashboard')
        
    });
    return(
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={submitform} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="Food"
                  required
                  fullWidth
                  id="Food"
                  label="Food"
                  onChange={(e)=>setfood(e.target.value)} value={food}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Location"
                  label="Location"
                  name="Location"
                  onChange={(e)=>setlocation(e.target.value)} value={location}
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post
            </Button>
          </Box>
        </Box>
        {error && <div className="error">{error}</div>}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
        
    )
}
export default Newpost;