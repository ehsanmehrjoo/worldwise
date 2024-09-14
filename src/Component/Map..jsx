import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap,  useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const {cities} = useCities()
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);


  const [searchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

 useEffect(function(){
  if(lat && lng) setMapPosition([lat, lng])
 }, [lat,lng])

  return (
    <div className={styles.mapContainer}  >
      <MapContainer 
            center={mapPosition} 

      zoom={13} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => <Marker position={[city.position.lat , city.position.lng]} key={city.id}>
          <Popup>
          <span>{city.emoji}</span><span>{city.cityName}</span>   
          </Popup>
        </Marker>)}


        <ChangeCenter position={mapPosition}/>
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({position}){
  const map = useMap();
  map.setView(position)
  return null
}


function DetectClick(){
  const navigate = useNavigate();

  useMapEvents({
    click : e =>{
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)}
  })
}
export default Map;