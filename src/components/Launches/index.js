import { Grid, Paper } from '@mui/material';
import Launch from '../Launch';
import styles from './launches.module.css';

const Launches = ({ launches }) => {
   return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {launches.map((launch) => (
            <Grid key={launch.id} item xs={4} lg={4}>
               <Paper className={styles.page}>
                  <Launch props={launch} />
               </Paper>
            </Grid>
         ))}
      </Grid>
   );
};

export default Launches;
