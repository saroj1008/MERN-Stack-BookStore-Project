import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Tabs, Tab, Toolbar, Typography, Box, Tooltip, IconButton, Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../../LanguageDropdown';
import i18next from 'i18next';
import apiServiceUser from '../../../services/apiServiceUser';
import UserContext from './UserContext';

const UserHeader = ({ data }) => {
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
    const { cartLength, setCartLength } = data;
    const navigate = useNavigate();
    // const [cartLength, setCartLength] = useState(0);
    useEffect(() => {
        fetchCartItems();
    }, []);

    // fetch cart items when mounts:
    async function fetchCartItems() {
        const response = await apiServiceUser.fetchCart(loggedInUser._id);
        setCartLength(response.length);
    }


    //write here
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleClick = (language) => {
        i18next.changeLanguage(language);
        setSelectedLanguage(language);
    };
    //

    const handleLogOutClick = () => {
        localStorage.removeItem('LoggedInUserInfo');
        localStorage.removeItem('AUTH_TOKEN');
        setLoggedInUser(null);
        navigate('/signin');
    };

    const navigateCartPage = () => {
        navigate('cart');
    };



    return (
        <div>
            <div style={{ paddingTop: '60px' }}></div>
            <AppBar position="fixed" sx={{ backgroundColor: "#00A1C9" }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div">
                        <NavLink to="/user" style={{ color: 'white', textDecoration: 'none' }}>
                            User Panel
                        </NavLink>
                    </Typography>
                    {/* write here */}
                    <Typography>
                        Language: <LanguageDropdown selectedLanguage={selectedLanguage} onChange={handleClick} />
                    </Typography>
                    {/* write here */}

                    <Tabs textColor="inherit" value={false}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip title="Cart" arrow>
                                <IconButton onClick={navigateCartPage} color="inherit">
                                    {cartLength > 0 ? <div>{cartLength}</div> : <div></div>} <ShoppingCartIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={`Hello! ${loggedInUser.firstName}`} arrow>
                                <Avatar alt={loggedInUser.firstName}></Avatar>
                            </Tooltip>
                            <Tooltip title="Log Out" arrow>
                                <IconButton onClick={handleLogOutClick} color="inherit">
                                    <LogoutIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default UserHeader;
