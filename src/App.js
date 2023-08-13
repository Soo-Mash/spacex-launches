import './App.css';
import { useState, useEffect } from 'react';
import Launches from './components/Launches';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import { LoadingButton } from '@mui/lab';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import paginationDirection from './utilities/enums';
import SpacexLogo from './images/SpaceX-Logo.svg';
import SpacexImg1 from './images/spacex-unsplash2.jpg';
import SpacexImg2 from './images/spacex-unsplash.jpg';
import SpacexImg3 from './images/spacex-unsplash3.jpg';
import SpacexImg4 from './images/spacex-unsplash4.jpg';
import SpacexImg5 from './images/spacex-unsplash5.jpg';
import SpacexImg6 from './images/spacex-unsplash6.jpg';
import SpacexImg7 from './images/spacex-unsplash7.png';

function App() {
   const [data, setData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [previousLoading, setPreviousLoading] = useState(false);
   const [nextLoading, setNextLoading] = useState(false);
   const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
   const apiUrl = 'https://api.spacexdata.com/v4/launches/query';

   const spacexBackgroundImageUrls = [
      SpacexImg1,
      SpacexImg2,
      SpacexImg3,
      SpacexImg4,
      SpacexImg5,
      SpacexImg6,
      SpacexImg7,
   ];

   function getQueryBody(pageNumber) {
      return {
         query: {
            upcoming: false,
            success: true,
         },
         options: {
            page: pageNumber,
            select: {
               id: 1,
               name: 2,
               links: 3,
               date_utc: 4,
               flight_number: 5,
            },
            populate: [
               {
                  path: 'rocket',
                  select: {
                     id: 1,
                     name: 2,
                     type: 3,
                     description: 4,
                     height: 5,
                     diameter: 6,
                     mass: 7,
                     flickr_images: 8,
                  },
               },
               {
                  path: 'crew',
                  select: {
                     id: 1,
                     name: 2,
                     agency: 3,
                     image: 4,
                  },
               },
               {
                  path: 'payloads',
                  select: {
                     id: 1,
                     name: 2,
                     type: 3,
                     orbit: 4,
                     reference_system: 5,
                     regime: 6,
                  },
               },
               {
                  path: 'capsules',
                  select: {
                     id: 1,
                     type: 2,
                     status: 3,
                     serial: 4,
                  },
               },
               {
                  path: 'launchpad',
                  select: {
                     id: 1,
                     name: 2,
                     full_name: 3,
                     locality: 4,
                     region: 5,
                     latitude: 6,
                     longitude: 7,
                     details: 8,
                  },
               },
            ],
            sort: {
               flight_number: 'desc',
            },
         },
      };
   }

   const fetchData = async (pageNumber, direction) => {
      try {
         if (direction === paginationDirection.next) setNextLoading(true);
         if (direction === paginationDirection.previous) setPreviousLoading(true);
         const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(getQueryBody(pageNumber)),
         });

         if (!response.ok) {
            console.log('Network response was not ok');
            setNextLoading(false);
            setPreviousLoading(false);
         }

         const responseData = await response.json();
         console.log(responseData);
         setData(responseData);
         setNextLoading(false);
         setPreviousLoading(false);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   const nextPage = () => {
      setCurrentPage(currentPage + 1);
      fetchData(currentPage + 1, 'next');
      imageSlideShowIncrement(paginationDirection.next);
   };
   const prevPage = () => {
      setCurrentPage(currentPage - 1);
      fetchData(currentPage - 1, 'prev');
      imageSlideShowIncrement(paginationDirection.previous);
   };

   const imageSlideShowIncrement = (direction) => {
      if (direction === paginationDirection.next)
         setBackgroundImageIndex((backgroundImageIndex + 1) % spacexBackgroundImageUrls.length);
      if (direction === paginationDirection.previous)
         setBackgroundImageIndex((backgroundImageIndex - 1) % spacexBackgroundImageUrls.length);
   };

   useEffect(() => {
      fetchData(currentPage);
   }, []);

   return (
      <div className="App" style={{ backgroundImage: `url(${spacexBackgroundImageUrls[backgroundImageIndex]})` }}>
         <Container className="mainContainer" maxWidth="md">
            <img src={SpacexLogo} className="spacexBackgroundLogo" />

            <Card className="launchCounter">Total Launches: {data.totalDocs}</Card>
            {data.docs ? (
               <div>
                  <Launches launches={data.docs} />
                  <div className="paginationContainer">
                     <Card className="pageCounter">
                        {data['page']} / {data.totalPages}
                     </Card>
                     <LoadingButton
                        loading={previousLoading}
                        variant="contained"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="button"
                        startIcon={<ArrowBackIos />}
                     >
                        Prev
                     </LoadingButton>

                     <LoadingButton
                        loading={nextLoading}
                        variant="contained"
                        onClick={nextPage}
                        disabled={currentPage === data.totalPages}
                        className="button"
                        endIcon={<ArrowForwardIos />}
                     >
                        Next
                     </LoadingButton>
                  </div>
               </div>
            ) : (
               <div>Loading...</div>
            )}
         </Container>
      </div>
   );
}
export default App;
