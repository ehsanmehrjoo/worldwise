import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const handleDivClick = () => {
    navigate("form");
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // جلوگیری از انتقال رویداد کلیک به div
    setSearchParams({ lat: 50, lng: 40 });
  };

  return (
    <div className={styles.mapContainer} onClick={handleDivClick}>
      <h1>Map</h1>
      <h1>Position: {lat}, {lng}</h1>
      <button onClick={handleButtonClick}>Change position</button>
    </div>
  );
}

export default Map;
