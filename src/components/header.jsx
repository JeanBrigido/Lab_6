import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTextContext } from '../context/TextContext';
import { useAuthContext } from "@asgardeo/auth-react";

const Header = () => {
    const { headerText } = useTextContext();
    const { state, signIn, signOut } = useAuthContext();

    return (
        <header>
            <AppBar position="fixed" sx={{ mb: 2, backgroundColor: 'green' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Welcome {headerText} to the <span style={{ color: '#FFD700' }}>CodeCraft</span> Labs Intranet
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/emp_mgmt">Employee Management</Button>
                    {state.isAuthenticated ? (
                        <Button color="inherit" onClick={() => signOut()}>Sign Out</Button>
                    ) : (
                        <Button color="inherit" onClick={() => signIn()}>Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
