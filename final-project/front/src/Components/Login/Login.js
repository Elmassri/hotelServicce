import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../Login/Login.css'
import { red } from '@material-ui/core/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" margin-left="500px">
     
      <Link class="s1" href="https://material-ui.com/">
		
      </Link>{' '}
      
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {
     backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color : 'white',
    
marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    
  },
  avatar: {
    backgroundColor: 'rgb(0,64,128)',
    
  },
  form: {
    color:'rgb(0,64,128)',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:'white',
    background: '',
   
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');



  return (
    <div className='bodyLogin'>
<div className='image'>

  </div>      
      <Container className='body1' component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography class="s2" component="h1" variant="h5"  >
          Login
        </Typography>
        <form className={classes.form} noValidate   >

            
          <TextField class="s3"
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
            variant="outlined"
            margin="normal"
            placeholder=' Enter Username'
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField class="s4"
          onChange={(event)=>{
            setPass(event.target.value)
          }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            placeholder='Password'
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
           
          />
          
          <FormControlLabel className='s6'
            control={<Checkbox class="s7" value="remember"  />}
            label="Remember me"
           
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            className={classes.submit}
          >
            Login
          </Button>
       
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
    
  );
}