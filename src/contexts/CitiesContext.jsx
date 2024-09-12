import React, { useContext, useEffect, useState } from 'react'

const CitiesContext = useContext()

const BASE_URL = "http://localhost:9000";

function CitiesProvider( {children}) {
    const [cities, setCities] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);

    
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        
        console.log(res); // Add this line to inspect the response
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error); // Log the error details
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
    
  
    function handelDeleteBtn (cityId){
      setCities(cities.filter(city => city.id !== cityId))
    }
  return (
     <CitiesContext.Porv
  )
}

export default CitiesContext;