 
import SideBar from "../Component/SideBar";
import Map from "../Component/Map";
import styles from "./AppLayout.module.css";
 function AppLayout ()  {
  return (
    <div className={styles.app}>
        <SideBar />
        <Map />
    </div>
  );
};

export default AppLayout;