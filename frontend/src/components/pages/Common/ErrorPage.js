// Import necessary modules
import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// Create the ErrorPage component
const ErrorPage = ({ errorMessage, notFound }) => {
    return (
        <Container maxWidth="sm">
            <h1 style={{ color: 'red' }}>The requested page could not be found.</h1>

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="50vh"
            >
                <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
                    {/* Error Icon */}
                    <ErrorOutlineIcon color="error" fontSize="large" />
                    {/* Error Type */}
                    <Typography variant="h4" component="h1" gutterBottom>
                        {notFound ? 'Page Not Found' : 'Oops! Something went wrong.'}
                    </Typography>
                    {/* Error Message */}
                    <Typography variant="body1" gutterBottom>
                        {errorMessage}
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default ErrorPage;
