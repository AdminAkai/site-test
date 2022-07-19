import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import PhoneIcon from '@mui/icons-material/Phone';

import colors from '../../utils/colors'

import LogoPlaceholder from '../../assets/logo-placeholder-image.png'

import { PhoneNumberWrapper } from './styledComponents';

const buttonFontSize = 15

function Navbar() {
  return (
    <AppBar position="static" color="inherit" sx={{ backgroundColor: colors.tan }}>
      <Toolbar>
        <img src={LogoPlaceholder} alt="logo-placeholder" style={{ width: "6%",  height: "6%"}}/>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Advanced Caregiver's Inc
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color='inherit' sx={{ fontSize: buttonFontSize }}>
            Home
          </Button>
          <Button color='inherit' sx={{ fontSize: buttonFontSize }}>
            About
          </Button>
          <Button color='inherit' sx={{ fontSize: buttonFontSize }}>
            Services
          </Button>
          <Button color='inherit' sx={{ fontSize: buttonFontSize }}>
            Contact
          </Button>
          <PhoneNumberWrapper>
            <PhoneIcon color='primary' />
            <Typography 
              variant="h6" 
              component="div" 
              color='primary' 
              sx={{ marginLeft: 1 }}
            >
              (818) 701-1998
            </Typography>
          </PhoneNumberWrapper>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar