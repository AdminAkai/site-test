import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { FooterWrapper } from './styledComponents'

function Footer() {
  return (
    <FooterWrapper>
      <Grid 
        container 
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        spacing={2}
      >
        <Grid item>
          <Typography>
            EMAIL: Advancedhomecareservices@yahoo.com
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            OFFICE: 818-701-1998 / 818-268-2006 / 818-993-1317
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            FAX: 818-701-5466
          </Typography>
        </Grid>
      </Grid>
    </FooterWrapper>
  )
}

export default Footer