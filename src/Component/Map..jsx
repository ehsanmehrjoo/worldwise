import {  useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

 function Map ()  {
 const navigate = useNavigate();
 const position = [51.505, -0.09]
 const [searchParam , setSearchParam ] = useSearchParams();
 const lat = searchParam.get("lat");
 const lng = searchParam.get("lng")
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
         <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
};

export default Map;