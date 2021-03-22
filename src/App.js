import './App.css';
import { useState, useEffect } from "react";
import Hotel from "./components/Hotel";
import LoadingMask from "./components/LoadingMask";

const App = () => {

  const [data, setData] = useState([]);
  const [stillLoading, setStillLoading] = useState(true);

    useEffect(() => {
      setStillLoading(true);

      const asyncfn = async () => {
        const hotelData = await fetch("api/hotels")
        .then(res => res.json())
        .then(data => setData(data))
        setStillLoading(false);
      }
      asyncfn();
      
    }, [])

    useEffect(()=> {
      console.log(data);
    }, [data])



  return (
    <div className="App">
      
      
      { stillLoading ? <LoadingMask /> : ""}
      
      { data ? data.map(hotel => <Hotel key={hotel.name}
                                        name={hotel.name}
                                        stars={hotel.stars}
                                        city={hotel.city}
                                         />) :	  <p>404 Not found..</p>
			  }

    </div>
  )
}

export default App
