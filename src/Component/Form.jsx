import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of Navigate
// import { useId } from "react";
import styles from "./Form.module.css";
import BackButton from "./BackButton";
import { useURLPosition } from "../hooks/useURLPosition";
import Message from "./Message.";
import Spinner from "./Spinner.";
import Button from "./Button";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const navigate = useNavigate(); // Correct usage of navigate
  // const id = useId();
  const {  creacteCity,  setCities } = useCities();
  const [lat, lng] = useURLPosition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Format Date correctly
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  function handleAddCity(e) {
    e.preventDefault() 
    if(!cityName || !date) return
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    creacteCity(newCity)
    navigate("/App/cities"); // Navigate to cities route after adding
  }



  useEffect(function () {
    if(!lat && !lng) return 
    async function fetchReverseGeocode() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else 😉"
          );
        setCityName(data.city || data.locality || "Unknown");
        setCountry(data.countryCode || "");
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeocodingError(err.message);
        console.log("Error fetching geocode data:", err);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }

    
      fetchReverseGeocode();
    
  }, [lat, lng]);

  if (isLoadingGeocoding) return <Spinner />;

  if(!lat && !lng ) return <Message message="Start by clicking somewhere on the map"/>
  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className={styles.form} onSubmit={handleAddCity}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          type="date" // Type set to 'date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary"  >ADD</Button> {/* Added the click handler */}
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
