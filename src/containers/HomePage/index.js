import Grid from '@mui/material/Grid';

import Abstract from '../../components/Abstract'
import HealthBanner from '../../components/HealthBanner'

function HomePage() {
  return (
    <Grid 
      container
      sx={{ 
        width: '100%',
      }}
      justifyContent='center'
    >
      <Grid item sx={{ marginTop: "8%", marginLeft: "10%" }}>
        <Abstract />
      </Grid>
      <Grid item sx={{ marginLeft: "15%" }}>
        <HealthBanner />
      </Grid>
    </Grid>
  )
}

export default HomePage