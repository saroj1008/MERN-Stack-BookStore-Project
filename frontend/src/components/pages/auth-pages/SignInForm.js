import React, { useContext, useState } from 'react';
import { Box, Button, Card, CardContent, FormLabel, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import apiServiceAuth from '../../../services/apiServiceAuth';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';
import SignInSignUpHeader from '../Common/SigninSignupHeader';

const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const { setLoggedInUser } = useContext(LoggedInUserContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiServiceAuth.signInUserAdmin(loginFormData);
      // console.log("test response", response.token);
      if (response) {
        localStorage.setItem('LoggedInUserInfo', JSON.stringify(response.data));
        localStorage.setItem('AUTH_TOKEN', response.token);
        const loggedInfo = JSON.parse(localStorage.getItem('LoggedInUserInfo'));
        // set LoggedInUser info from local storage
        setLoggedInUser(loggedInfo);
        console.log('response----', response);
        if (loggedInfo.role === 'user') {
          navigate('/user');
        } else if (loggedInfo.role === 'admin') {
          navigate('/admin');
        }
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage('No matching username and password found');
    }
  };

  return (
    <div>
      <SignInSignUpHeader />
      <Card variant="outlined" style={{ width: '30%', margin: 'auto', marginTop: '80px' }}>
        <CardContent>
          <Typography variant="h4">User Signin</Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mt: 2 }}>
              <FormLabel>
                Email Address<span className="required">*</span>
              </FormLabel>
              <TextField
                margin="none"
                value={loginFormData.email}
                placeholder="Email address"
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                name="email"
                type="email"
                required
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <FormLabel>
                Password<span className="required">*</span>
              </FormLabel>
              <TextField
                margin="none"
                value={loginFormData.password}
                placeholder="Password"
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                name="password"
                type="password"
                required
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button type="submit" variant="contained" className="submit-button" disabled={loginFormData.email.length <1} >
                Login
              </Button>
            </Box>
            {errorMessage && <div style={{ color: 'red', marginTop: '8px' }}>*{errorMessage}</div>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInForm;
