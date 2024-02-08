import React, { useState } from 'react';
import { Box, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, OutlinedInput, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { isPhoneNumberValid, isNameValid, validatePassword } from './FormValidation';
import { useNavigate } from 'react-router-dom';
import apiServiceAuth from '../../../services/apiServiceAuth';

const SignUpForm = () => {
  const [registerFormData, setRegisterFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    gender: '',
    role: 'user', // Assuming this field will be added later
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    gender: '',
  });

  // Function to validate form fields
  const validateForm = () => {
    let errors = {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      password: '',
      gender: '',
    };

    let valid = true;

    if (!isPhoneNumberValid(registerFormData.mobileNumber)) {
      errors.mobileNumber = 'Check mobile number, it should have exactly 10 digits';
      valid = false;
    }

    if (!isNameValid(registerFormData.firstName)) {
      errors.firstName = 'Check first name';
      valid = false;
    }

    if (!isNameValid(registerFormData.lastName)) {
      errors.lastName = 'Check last name';
      valid = false;
    }

    if (!validatePassword(registerFormData.password)) {
      errors.password = 'Check password length, symbols, digits, and numbers';
      valid = false;
    }

    if (registerFormData.gender === '') {
      errors.gender = 'Select your gender';
      valid = false;
    }

    setFormErrors(errors);

    return valid;
  };

  const navigate = useNavigate();

  // Handle role/gender radio button
  const handleRadioButton = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });

    setFormErrors({
      ...formErrors,
      gender: '',
    });
  };

  // Handle input change in text field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  // Signup User
  async function signupUserAdmin(formData) {
    await apiServiceAuth.signUpUserAdmin(formData);
  }

  // Handle submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      signupUserAdmin({
        ...registerFormData,
        cart: [],
        orderHistory: [],
      });
      setRegisterFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
      });
      navigate('/signin');
    } else {
      console.log(formErrors);
      alert('Please check the form for errors');
    }
  };

  return (
    <Card variant="outlined" style={{ width: '40%', margin: '0 auto', marginTop: '40px' }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Box p={3}>
            <Typography variant="h4">Member Registration Form</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel>
                  First Name<span className="required">*</span>
                </FormLabel>
                <TextField
                  margin="none"
                  value={registerFormData.firstName}
                  placeholder="First name"
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  required
                  name="firstName"
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>
                  Last Name<span className="required">*</span>
                </FormLabel>
                <TextField
                  margin="none"
                  value={registerFormData.lastName}
                  placeholder="Last name"
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  required
                  name="lastName"
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>
                  Email Address<span className="required">*</span>
                </FormLabel>
                <TextField
                  margin="none"
                  value={registerFormData.email}
                  placeholder="Email address"
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  name="email"
                  type="email"
                  required
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>
                  Create Password<span className="required">*</span>
                </FormLabel>
                <TextField
                  margin="none"
                  value={registerFormData.password}
                  placeholder="Create password"
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  name="password"
                  type="password"
                  required
                  error={!!formErrors.password}
                  helperText={formErrors.password}
                />
              </Grid>
            </Grid>
            <FormLabel>
              Gender<span className="required">*</span>
            </FormLabel>
            <Grid>
              <FormControl component="fieldset" margin="none">
                <RadioGroup row aria-label="gender" name="gender" value={registerFormData.gender} onChange={handleRadioButton}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {formErrors.gender && <Typography color="error">{formErrors.gender}</Typography>}
              </FormControl>
            </Grid>
            <FormLabel>
              Mobile Phone Number<span className="required">*</span> (US members only)
            </FormLabel>
            <OutlinedInput
              margin="none"
              value={registerFormData.mobileNumber}
              placeholder="123-456-1234"
              onChange={handleInputChange}
              fullWidth
              name="mobileNumber"
              startAdornment={<InputAdornment position="start">+</InputAdornment>}
              error={!!formErrors.mobileNumber}
            />
            <Button type="submit" variant="contained" color="primary" sx={{marginTop: "10px"}}>
              Register
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
