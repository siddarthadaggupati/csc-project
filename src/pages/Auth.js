import React from "react";
import * as Components from './AuthComponents';
import axios from 'axios';
import Navbar from "../components/Navbar";
import './Auth.css';
import {useNavigate} from 'react-router-dom';

function App() {
  const [signIn, toggle] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phno, setPhno] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loginmail,setLoginmail] = React.useState('');
  const [loginpassword,setLoginPassword] = React.useState('');


  const navigate = useNavigate('');
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://pc-server-ts3k.vercel.app/insert', {
        'name': name,
        'email': email,
        'password': password,
        'phno': phno,
      });
      console.log('Signing up:', name, email, phno, password);
      if (response.data === "datareceived") {
        console.log('user inserted');
        navigate('/ahome');
      }
      if(response.data === 'exists')
      {
        alert("email already exists");
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLogin = async (event)=>{
    event.preventDefault();
    try{
      const response = await axios.post('https://pc-server-ts3k.vercel.app/fetch',{
        'email': loginmail,
        'password': loginpassword,
      });
      if(response.data === 'loginsuccess')
      {
        navigate('/ahome');
      }
      else if(loginmail === 'admin@gmail.com' && loginpassword === '123' )
      {
        navigate('/requests');
      }
      else if(response.data === 'wrongdetails')
      {
        alert("incorrect username or password");
      }
      else if(response.data === 'notexists') 
      {
        alert('No user found')
      }
    }
    catch(e)
    {
      console.log(e)
    }
  };
  return (
   <div>
    <div className="navbar">
      <Navbar/>
    </div>
    <div className="remaining">
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSignUp}>
          <Components.Title style={{color:'black'}}>Create Account</Components.Title>
          <Components.Input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
          <Components.Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          <Components.Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <Components.Input type='text' inputMode="numeric" pattern="[0-9]*" value={phno} onChange={(e) => setPhno(e.target.value)} placeholder='Phone number' /> <br />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title style={{color:'black'}}>Sign in</Components.Title>
          <Components.Input type='email' placeholder='Email' onChange={(e) => setLoginmail(e.target.value)} />
          <Components.Input type='password' placeholder='Password' onChange={(e) => setLoginPassword(e.target.value)} />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container>
    </div>
   </div>
  )
}

export default App;
