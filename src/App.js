import React, {useState , useEffect} from 'react'

import Loading from './components/Loading';

import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project/';


const App = () => {
  const [isLoading, setIsLoading] = useState (true);

  const [tours , setTours] = useState([]);

  const fetchTours = async()=>{
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(()=>{
   fetchTours();
  },[])
  if(isLoading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return(
    <main>
      <Tours />
    </main>
  )
}

export default App