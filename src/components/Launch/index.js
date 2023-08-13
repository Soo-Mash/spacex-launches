import styles from './launch.module.css';
import moment from 'moment';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import SpacexLogo from '../spacexlogo.png';
import StarLink from '../starlink.png';
import CrewDragon from '../CrewDragon.jpg';
import Nilesat from '../NileSat.jpg';
import Kplo from '../KPLO.jpg';
import GlobalStar from '../globalstar.jpeg';
import Transporter4 from '../Transporter4.webp';
import Dart from '../dart.jpg';
import Inspiration4 from '../inspiration4-share.jpg';
import Turksat from '../turksat.jpg';

const Launch = ({ props }) => {
   const [cardImage, setCardImage] = useState(SpacexLogo);

   const cardImageSetter = () => {
      if (props.name.toLowerCase().includes('starlink')) setCardImage(StarLink);
      if (props.name.toLowerCase().includes('crew')) setCardImage(CrewDragon);
      if (props.name.toLowerCase().includes('nilesat')) setCardImage(Nilesat);
      if (props.name.toLowerCase().includes('kplo')) setCardImage(Kplo);
      if (props.name.toLowerCase().includes('kplo')) setCardImage(Kplo);
      if (props.name.toLowerCase().includes('globalstar')) setCardImage(GlobalStar);
      if (props.name.toLowerCase().includes('transporter')) setCardImage(Transporter4);
      if (props.name.toLowerCase().includes('dart')) setCardImage(Dart);
      if (props.name.toLowerCase().includes('inspiration')) setCardImage(Inspiration4);
      if (props.name.toLowerCase().includes('türksat')) setCardImage(Turksat);

      console.log('SIMON title', props.name);
   };

   useEffect(() => {
      cardImageSetter();
   });
   return (
      <Card
         elevation={10}
         sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(8px)',
            textAlign: 'right',
            '&:hover': { transform: 'scale(1.02)' },
            transition: 'all 0.4s ease-in-out',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <CardActionArea
            className={styles.launchCard}
            onClick={() => {
               window.open(props.links.webcast);
            }}
         >
            <CardMedia sx={{ height: 100 }} image={cardImage} aria-label title="Launch image" />
            <div className={styles.launchCardContent}>
               <div className={styles.launchTitle}>{props.name}</div>
               <div>Flight {props.flight_number}</div>
               <div>{moment(props.date_utc).format('MMMM Do YYYY, h:mm a')}</div>
            </div>
         </CardActionArea>
      </Card>
   );
};

export default Launch;
