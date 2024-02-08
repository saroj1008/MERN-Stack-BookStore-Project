import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Tab, Tabs, Toolbar, Typography, Avatar, Button, Tooltip, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';


const AdminHeader = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
    console.log("test logged in user", loggedInUser);

    const handleLogOutClick = () => {
        localStorage.removeItem('LoggedInUserInfo');
        localStorage.removeItem('AUTH_TOKEN');
        setLoggedInUser(null);
        navigate('/signin');
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#00A1C9" }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
                {/* Admin Panel Logo */}
                <Typography variant="h6" component="div">
                    <NavLink to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
                        Admin Panel
                    </NavLink>
                </Typography>

                {/* Navigation Tabs */}
                <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                    <Tab label="Home" icon={<LibraryBooksIcon />} component={NavLink} to="/admin" />

                    <Tab label="View Books" icon={<LibraryBooksIcon />} component={NavLink} to="/admin/books" />
                    {/* Uncomment the following line to add "Add Book" tab */}
                    {/* <Tab label="Add Book" icon={<AddIcon />} component={NavLink} to="/admin/books/add" /> */}
                    {/* Uncomment the following line to add "Log out" tab */}
                    {/* <Tab label="Log out" icon={<ExitToAppIcon />} component={Button} onClick={handleLogOutClick} /> */}
                    {/* <Button><Tab label="Log out" icon={<ExitToAppIcon />} component={NavLink} to="/logout" /></Button> */}
                    {/* <Tooltip title="Log Out" arrow>
                        <IconButton onClick={handleLogOutClick} color="inherit">
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip> */}
                </Tabs>

                {/* Display Admin Name and Avatar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Typography variant="subtitle1" sx={{ color: 'white' }}>
                        {loggedInUser.firstName}
                    </Typography>
                    <Avatar sx={{ bgcolor: '#f50057' }}>
                        <AccountCircleIcon />
                    </Avatar>
                    <Tooltip title="Log Out" arrow>
                        <IconButton onClick={handleLogOutClick} color="inherit">
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;
