import './App.css';
import { useState, useEffect } from 'react';
import Launches from './components/Launches';
import { Button, Container } from '@mui/material';
import Card from '@mui/material/Card';
import { LoadingButton } from '@mui/lab';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import paginationDirection from './utilities/enums';

function App() {
   const [data, setData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [previousLoading, setPreviousLoading] = useState(false);
   const [nextLoading, setNextLoading] = useState(false);
   const apiUrl = 'https://api.spacexdata.com/v4/launches/query';

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

   useEffect(() => {
      fetchData(currentPage);
   }, []);

   const nextPage = () => {
      setCurrentPage(currentPage + 1);
      fetchData(currentPage + 1, 'next');
   };
   const prevPage = () => {
      setCurrentPage(currentPage - 1);
      fetchData(currentPage - 1, 'prev');
   };

   return (
      <div className="App">
         <Container className="mainContainer">
            <Card>Total Launches: {data.totalDocs}</Card>
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
