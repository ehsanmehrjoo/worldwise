import React, { createContext, useContext, useEffect, useState } from 'react'

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

function CitiesProvider({children}) {
    const [cities, setCities] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity , setCurrentCity] = useState({});

    
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
    
  async function getCity (id){
   
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
          
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json();
        console.log(data);
        setCurrentCity(data);
      } catch (error) {
        console.error("Error fetching cities:", error); // Log the error details
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
  
  }

  async function creacteCity (newCity){
   
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((prevCities) => [...prevCities, data]);
   
    } catch (error) {
      
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }

}
  
    
  return (
     <CitiesContext.Provider value={{
        cities , 
        setCities , 
        isLoading , 
        currentCity ,
        setCurrentCity, 
        getCity, 
        creacteCity
     }}>
 {children}
     </CitiesContext.Provider>
  )
}
 
function useCities (){
 const context = useContext(CitiesContext);
 if(context === undefined) throw new Error("CitiesContext was use outside the CitiesProvider ")
 return context
}
export   { CitiesProvider ,   useCities};