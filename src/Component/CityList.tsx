
import styles from "./CityList.module.css"
import Spinner from "./Spinner";

 function Ctiylist ({cities , isLoading} )  {
    if(isLoading) return <Spinner/>
  return (
    <ul className={styles.cityList}>
        {cities.map(city => {

        })}
    </ul>
  );
};

export default Ctiylist;