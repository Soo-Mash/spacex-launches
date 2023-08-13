import { Grid, Paper } from '@mui/material';
import Launch from '../Launch';

const Launches = ({ launches }) => {
   return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {launches.map((launch) => (
            <Grid key={launch.id} item xs={6} lg={6}>
               <Launch props={launch} />
            </Grid>
         ))}
      </Grid>
   );
};

export default Launches;
