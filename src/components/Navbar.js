import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import PhoneIcon from '@mui/icons-material/Phone';

import LogoPlaceholder from '../assets/logo-placeholder-image.png'

function Navbar() {
    return (
        <AppBar position="static" color="transparent">
        <Toolbar>
          <img src={LogoPlaceholder} alt="logo-placeholder" style={{ width: "5%",  height: "5%"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Advanced Caregiver's Inc
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Services</Button>
            <Button color='inherit'>Contact</Button>
            <PhoneIcon />
            <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
              (818) 701-1998
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar