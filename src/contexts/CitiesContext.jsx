import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();
 const initialState = {
  cities : [] ,
  isLoading : false, 
  currentCity : {},
  error : ""
 }
function reducer(state , action){
  switch (action.type) {
    case "loading" :
      return {...state , isLoading : true}
    case "cities/loaded" :
      return {...state , isLoading : false ,  cities : action.payload }

      case "city/loaded" :
        return {...state ,isLoading : false , currentCity : action.payload}

    case "cities/creacte" :


    case "cities/deleted" :

    case "rejected" :
      return {...state , isLoading : false , error : action.payload}

    default : return new throw Error ("Unknown action type")
  }
}

function CitiesProvider({children}) {
  const [ {cities  , isLoading  , currentCity}, dispatch] = useReducer(reducer , initialState )
    // const [cities, setCities] = useState([]); 
    // const [isLoading, setIsLoading] = useState(false);
    // const [currentCity , setCurrentCity] = useState({});

    
  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({type : "loading"})
   
        const res = await fetch(`${BASE_URL}/cities`);
        
        console.log(res); // Add this line to inspect the response
  
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
        const data = await res.json();
        dispatch({type : "cities/loaded" , payload : data})
  
      } catch (error) {
        console.error("Error fetching cities:", error); // Log the error details
        dispatch({type : "rejected" , payload : "There was an error loading data..."});
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
        dispatch({type : "city/loaded" , payload : data})
        setCurrentCity(data);
      } catch (error) {
        console.error("Error fetching cities:", error); // Log the error details
        dispatch({type : "rejected" ,  payload :"There was an error loading data..."});
      }  
  
  }

  async function creacteCity (newCity){
   
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "Post",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((prevCities) => [...prevCities, data]);
   
    } catch (error) {
      
      alert("There was an error creacting error");
    } finally {
      setIsLoading(false);
    }

}

async function  deletCity (id){
   
  try {
    await fetch(`${BASE_URL}/cities/${id}`, {
      method: "DELETE",
       
    });
 
    setCities(cities.filter(city => city.id !== id))
 
  } catch (error) {
    
    alert("There was an error deleting city.");
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
        creacteCity, 
        deletCity
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