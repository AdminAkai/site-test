import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import AbstractPlaceholder from '../assets/abstract-placeholder.jpg'

function Abstract() {
  return (
    <Card>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <img src={AbstractPlaceholder} alt="abstract-placeholder" style={{ width: 640, height: 360 }} />
      </CardContent>
    </Card>
  )
}

export default Abstract