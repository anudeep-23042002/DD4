// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {useSignup} from '../hooks/usesignup'

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const [email,setemail]=React.useState('');
//   const [username,setusername]=React.useState('');
//   const [password,setpassword]=React.useState('');
//   const {signup,error}=useSignup();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   const submitsignup =async(event)=>{
//     event.preventDefault();
//     await signup(email,username,password);
//   }

//   return (
//     <div>
//     <form onSubmit={submitsignup}>
//       <TextField hiddenLabel id="username" defaultValue="" 
//                     variant="filled" onChange={(e)=>setusername(e.target.value)} value={username}/>
//       <br></br>
//       <TextField hiddenLabel id="email" defaultValue="" 
//       variant="filled" onChange={(e)=>setemail(e.target.value)} value={email}/>
//       <br></br>
//       <TextField  id="password" defaultValue="" 
//       variant="filled" onChange={(e)=>setpassword(e.target.value)} value={password}/>
//       <br></br>
//       <Button variant="contained" color="success" type="submit">Success</Button>
//     </form>
//     {error && <div className="error">{error}</div>}
//     </div>
//   );
// }
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useSignup} from '../hooks/usesignup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [email,setemail]=React.useState('');
  const [firstname,setfirstname]=React.useState('');
  const [secondname,setsecondname]=React.useState('');
  const [password,setpassword]=React.useState('');
  const {signup,error}=useSignup();
  const [role, setRole] = React.useState('Recipient');

  const [phone,setphone]=React.useState(null);
  const submitsignup =async(event)=>{
    event.preventDefault();
    let username=firstname+' '+secondname;
    await signup(email,password,username,role,phone);
  }

  return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={submitsignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e)=>setfirstname(e.target.value)} value={firstname}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={(e)=>setsecondname(e.target.value)} value={secondname}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e)=>setemail(e.target.value)} value={email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e)=>setpassword(e.target.value)} value={password}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  onChange={(e)=>setphone(e.target.value)} value={phone}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  onChange={(e)=>setRole(e.target.value)}
                >
                  <MenuItem value={'Donor'}>Donor</MenuItem>
                  <MenuItem value={'Recipient'}>Recipient</MenuItem>
              </Select>
              
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {error && <div className="error">{error}</div>}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}